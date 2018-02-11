import React from 'react';
import PropTypes from 'prop-types';
import {
  GameStyled,
  Header,
  Body,
  Title,
  Info,
  Selection
} from './GameStyled';

class Game extends React.PureComponent {
  static propTypes = {
    game: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    order: PropTypes.number.isRequired
  }

  render() {
    if (Object.keys(this.props.game).length === 0) {
      return (
        <GameStyled
        order={this.props.order}
        >
          <Header />
          <Body>
            <Title stub={true} />
            <Info />
          </Body>
        </GameStyled>
      );
    };
    const isAliasShorter = this.props.game.aliases &&
      this.props.game.aliases.length < this.props.game.name.length;
    return (
      <GameStyled
        order={this.props.order}
        onClick={this.props.onClick.bind(null, this.props.game, this.props.order)}
        selected={this.props.selected}
      >
        <Selection selected={this.props.selected} />
        <Header background={this.props.game.image && this.props.game.image.small_url} />
        <Body>
          <Title>{isAliasShorter ? this.props.game.aliases : this.props.game.name}</Title>
          <Info />
        </Body>
      </GameStyled>
    );
  }
};

export default Game;