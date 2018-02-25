import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import games from '../reducers/games';

export default combineReducers({
  routing: routerReducer,
  games
});
