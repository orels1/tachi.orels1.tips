import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Game from '../../components/Game';
import Pad from '../../components/Pad';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      padVisible: false,
      selectedGame: null,
      selectedGameIndex: null,
    }

    this.handlePadToggle = this.handlePadToggle.bind(this);
  }

  handlePadToggle(game, order) {
    if (this.state.padVisible) {
      this.setState({
        ...this.state,
        padVisible: false,
        selectedGame: null,
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
  

  render() {
    const games = ['Doom (2016)', 'Horizon: Zero Dawn', 'Forza Horizon 3', 'The Legend of Zelda: BotW'];
    const blocks = games.map((game, index) => (
      <Game
        onClick={this.handlePadToggle}
        game={game}
        key={game}
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
        <Pad visible={this.state.padVisible} name={this.state.selectedGame} />
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
