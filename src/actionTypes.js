import keyMirror from 'keymirror';

const types = {
  API_GET_FILM : null,
  API_GET_FILMS : null,
  API_GET_FILM_REQUEST : null,
  API_GET_FILMS_REQUEST : null,
  API_GET_FILM_FAILURE : null,
  API_GET_FILMS_FAILURE : null,
  API_CALL : null
}

export const actionTypes = keyMirror(types);


export const requestTypeConcat = (requestType, result) => `${requestType}_${result}`;
