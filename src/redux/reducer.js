const def = {
  films : [],
  film : []
}

const rootReducer = (state = def, action) => {
  switch (action.type) {
    case 'FILMS' :
      return {
        ...state,
        films : action.data
      }
    case 'FILM' :
      return {
        ...state,
        film : action.data
      }
    default:
      return state;
  }
};

export default rootReducer;