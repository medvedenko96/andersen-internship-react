export default function loadDataFilm(query) {
  return function (dispatch) {
    return fetch(`http://api.tvmaze.com/shows/${query}`)
    .then(res => res.json())
    .then(
      data => dispatch({type: 'FILM', data}),
      err => dispatch({type: 'FAILURE', err})
    );
  }
}
