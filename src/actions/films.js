export default function loadDataFilms(query) {
  return function (dispatch) {
    return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => res.json())
    .then(
      data => dispatch({type: 'FILMS', data}),
      err => dispatch({type: 'FAILURE', err})
    );
  }
}



