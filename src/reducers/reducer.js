import { actionTypes }  from '../actionTypes';

const def = {
  films : [],
  film : []
}

const rootReducer = (state = def, action) => {
  switch (action.type) {
    case actionTypes.API_GET_FILMS_REQUEST :
      return {
        ...state,
        films : action.payload
      }
    case actionTypes.API_GET_FILM_REQUEST :
      return {
        ...state,
        film : action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
