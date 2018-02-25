import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Game from '../../components/Game';
import Pad from '../../components/Pad';
import { fetchGames } from '../../actions/games-actions';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem('token');

    this.state = {
      padVisible: false,
      selectedGame: {},
      selectedGameIndex: null,
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
    await this.props.fetchGames({ ids: this.props.list, token: this.state.token });
  }
  

  render() {
    const list = this.props.games.length > 0 ? this.props.games : this.props.list;
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

export default connect(
  ({ games }) => ({
    list: games.list,
    games: games.data,
    fetching: games.fetching,
    fail: games.fetchingFail
  }),
  (dispatch) => bindActionCreators({
    fetchGames
  }, dispatch)
)(Home);
