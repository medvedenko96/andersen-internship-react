import keyMirror from 'keymirror';

const types = {
  GET_API_FILM : null,
  GET_API_FILMS : null,
  GET_API_FILM_REQUEST : null,
  GET_API_FILMS_REQUEST : null,
  GET_API_FILM_FAILURE : null,
  GET_API_FILMS_FAILURE : null,
  API_CALL : null
}

export const actionTypes = keyMirror(types);


export const requestTypeConcat = (requestType, result) => `${requestType}_${result}`;
