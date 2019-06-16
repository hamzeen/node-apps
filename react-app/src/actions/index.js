import { formatGistList, formatForkList } from './utils';

export const SEARCH_CLICKED = 'SEARCH_CLICKED';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const FETCH_FORK_SUCCESS = 'FETCH_FORK_SUCCESS';
export const FETCH_FORK_ERROR = 'FETCH_FORK_ERROR';

const url = 'https://api.github.com';

export function search(dispatch, username) {

  dispatch({ type: SEARCH_CLICKED });

  return fetch(`${url}/users/${username}/repos`, {
    method: "GET"
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      // console.log("RS:: "+res);
      dispatch({ type: SEARCH_SUCCESS, payload: formatGistList(res, username) });
    })
    .catch(error => {
      dispatch({ type: SEARCH_ERROR, payload: error });
      console.log(error);
    });
}

export function fetchForks(dispatch, ownProps, id) {
  return fetch(`${url}gists/${id}/forks`, {
    method: "GET"
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      const newFork = formatForkList(res, id);
      dispatch({ type: FETCH_FORK_SUCCESS, payload: newFork });
    })
    .catch(error => {
      dispatch({ type: FETCH_FORK_ERROR, payload: error });
      console.log(error);
    });
}
