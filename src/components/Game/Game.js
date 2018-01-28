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
      <GameStyled order={this.props.order}>
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