import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const Home = (props) => {
  const games = [1, 2, 3, 4];
  const blocks = games.map(game => (
    <div className="game-block" key={game}>
      <div className="game-block__header" />
      <div className="game-block__body">
        <div className="game-block__title" />
        <div className="game-block__info" />
      </div>
    </div>
  ));

  return(
    <div className="home">
      <h1 className="home__title">Tachi</h1>
      <p className="home__text">Welcome!</p>
      {/* <button className="home__about" onClick={() => props.changePage()}>About Tachi</button> */}
      <div className="preview-grid">
        {blocks}
      </div>
    </div>
  );
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//   changePage: () => push('/about-us')
// }, dispatch);

export default connect(
  null, 
  // mapDispatchToProps
)(Home);
