import React from 'react';
import {
  GameStyled,
  Header,
  Body,
  Title,
  Info
} from './GameStyled';

class Game extends React.PureComponent {
  render() {
    return (
      <GameStyled
        order={this.props.order}
        onClick={this.props.onClick.bind(null, this.props.game, this.props.order)}
        selected={this.props.selected}
      >
        <Header />
        <Body>
          <Title />
          <Info />
        </Body>
      </GameStyled>
    );
  }
};

export default Game;