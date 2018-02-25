import merge from 'lodash/merge';

import {
  FETCH_GAMES_START,
  FETCH_GAMES_FAIL,
  FETCH_GAMES_SUCCESS
} from '../actions/games-actions';

const initialState = {
  data: [],
  fetchingFail: false,
  fetching: false,
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_START:
      return {
        ...state,
        fetching: true,
        fetchingFail: false
      }
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetchingFail: false,
        data: action.payload
      }
    case FETCH_GAMES_FAIL:
      return {
        ...state,
        fetching: false,
        fetchingFail: true
      }
    case '@@INIT':
      return merge(state, initialState);
    default:
      return state;
  }

  // return state;
}