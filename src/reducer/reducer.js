import { actionTypes }  from '../actionTypes';

const def = {
  films : [],
  film : []
}

const rootReducer = (state = def, action) => {
  switch (action.type) {
    case actionTypes.GET_API_FILMS_REQUEST :
      return {
        ...state,
        films : action.payload
      }
    case actionTypes.GET_API_FILM_REQUEST :
      return {
        ...state,
        film : action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
