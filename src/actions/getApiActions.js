import { actionTypes }  from '../actionTypes';

/*export function loadDataFilm(query) {
  return function (dispatch) {
    return fetch(`http://api.tvmaze.com/shows/${query}`)
    .then(res => res.json())
    .then(
      payload => dispatch({type: actionTypes.GET_API_FILM, payload}),
      err => dispatch({type: actionTypes.GET_API_FILM_FAILURE, err})
    );
  }
}*/

/*
export function loadDataFilms(query) {
  return function (dispatch) {
    return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => res.json())
    .then(
      payload => dispatch({type: actionTypes.GET_API_FILMS, payload}),
      err => dispatch({type: actionTypes.GET_API_FILMS_FAILURE, err})
    );
  }
}
*/

export function loadDataFilm(query) {
  return (dispatch) => {
    return dispatch({
        type: actionTypes.API_CALL,
        url: `/shows/${query}`,
        requestType: actionTypes.GET_API_FILM
    })
  }
}

export function loadDataFilms(query) {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.API_CALL,
      url: `/search/shows?q=${query}`,
      requestType: actionTypes.GET_API_FILMS
    })
  }
}
