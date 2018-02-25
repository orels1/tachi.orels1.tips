export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_START = 'FETCH_GAMES_START';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAIL = 'FETCH_GAMES_FAIL';

export const fetchGames = ({ ids, token }) => async (dispatch) => {
  try {
    dispatch(fetchGamesStart());
    const resp = await Promise.all(ids.map((g) => {
      const url = encodeURIComponent(`https://www.giantbomb.com/api/game/${g}/?api_key=${token}&format=json`);
      return fetch(`http://localhost:5000?url=${url}`, { cache: 'cache' })
    }));
    const json = await Promise.all(resp.map(r => r.json()));
    const results = json.map(i => i.results);
    return dispatch(fetchGamesSuccess(results));
  } catch (e) {
    console.error(e);
    return dispatch(fetchGamesFail());
  }
};

export const fetchGamesStart = () => ({
  type: FETCH_GAMES_START
});

export const fetchGamesSuccess = (payload) => ({
  type: FETCH_GAMES_SUCCESS,
  payload
});

export const fetchGamesFail = () => ({
  type: FETCH_GAMES_FAIL
});
