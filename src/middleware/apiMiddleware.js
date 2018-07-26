import { actionTypes, requestTypeConcat }  from '../actionTypes';

const API_ROOT_URL = `http://api.tvmaze.com`;

export const apiMiddleware = store => next => action => {
  if (action.type === actionTypes.API_CALL) {
    const { url, requestType } = action;

    return fetch(`${API_ROOT_URL}${url}`)
      .then(res => res.json())
      .then(
        payload => store.dispatch({type: requestTypeConcat(requestType, 'REQUEST'), payload}),
        err => store.dispatch({type: requestTypeConcat(requestType, 'FAILURE'), err})
    );
  }

  return next(action);
}
