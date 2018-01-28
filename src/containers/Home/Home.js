import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Game from '../../components/Game';

export const Home = (props) => {
  const games = [1, 2, 3, 4];
  const blocks = games.map((game, index) => (
    <Game key={game} order={index} />
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
