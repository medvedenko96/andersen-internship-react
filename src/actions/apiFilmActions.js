import { actionTypes }  from '../actionTypes';

export function apiGetFilm(id) {
  return (dispatch) => {
    return dispatch({
        type: actionTypes.API_CALL,
        url: `/shows/${id}`,
        requestType: actionTypes.API_GET_FILM
    })
  }
}

export function apiGetFilms(query) {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.API_CALL,
      url: `/search/shows?q=${query}`,
      requestType: actionTypes.API_GET_FILMS
    })
  }
}
