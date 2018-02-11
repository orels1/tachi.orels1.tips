import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Game from '../../components/Game';
import Pad from '../../components/Pad';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem('token');

    this.state = {
      padVisible: false,
      selectedGame: {},
      selectedGameIndex: null,
      gamesList: [
        '3030-20654', // Doom
        '3030-49973', // Horizon: Zero Dawn
        '3030-54214', // Forza Horizon 3
        '3030-41355' // The Legend of Zelda: Breath of the Wild
      ],
      games: [],
      token,
    }

    this.handlePadToggle = this.handlePadToggle.bind(this);
  }

  handlePadToggle(game, order) {
    if (this.state.padVisible) {
      this.setState({
        ...this.state,
        padVisible: false,
        selectedGame: {},
        selectedGameIndex: null
      });
    } else {
      this.setState({
        ...this.state,
        padVisible: true,
        selectedGame: game,
        selectedGameIndex: order
      });
    }
  }

  async componentDidMount() {
    if (!this.state.token) return; // bail out if no token is present
    const resp = await Promise.all(this.state.gamesList.map((g) => {
      const url = encodeURIComponent(`https://www.giantbomb.com/api/game/${g}/?api_key=${this.state.token}&format=json`);
      return fetch(`http://localhost:5000?url=${url}`, { cache: 'cache' })
    }));
    const json = await Promise.all(resp.map(r => r.json()));
    this.setState({
      games: json.map(g => g.results)
    })
  }
  

  render() {
    const list = this.state.games.length > 0 ? this.state.games : this.state.gamesList;
    const blocks = list.map((game, index) => (
      <Game
        onClick={this.handlePadToggle}
        game={typeof game === 'object' ? game : {}}
        key={game.guid ? game.guid : game}
        order={index}
        selected={this.state.selectedGameIndex === index}
      />
    ));

    return(
      <div className="home">
        <h1 className="home__title">Tachi</h1>
        <p className="home__text">Welcome!</p>
        {/* <button className="home__about" onClick={() => props.changePage()}>About Tachi</button> */}
        <div className="preview-grid">
          {blocks}
        </div>
        <Pad
          visible={this.state.padVisible}
          name={this.state.selectedGame.name}
          short={this.state.selectedGame.deck}
        />
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//   changePage: () => push('/about-us')
// }, dispatch);

export default connect(
  null, 
  // mapDispatchToProps
)(Home);
