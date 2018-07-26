import { actionTypes, requestTypeConcat }  from '../actionTypes';

export const apiMiddleware = store => next => action => {

  if (action.type === actionTypes.API_CALL) {
    const { url, requestType} = action;
    return fetch(`http://api.tvmaze.com${url}`)
    .then(res => res.json())
    .then(
      payload => store.dispatch({type: requestTypeConcat(requestType, 'REQUEST'), payload}),
      err => store.dispatch({type: requestTypeConcat(requestType, 'FAILURE'), err})
    );

  }
  return next(action);
}
