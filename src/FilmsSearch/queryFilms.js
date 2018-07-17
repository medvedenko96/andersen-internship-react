export default function queryFilms(query) {
  let url = `http://api.tvmaze.com/search/shows?q=${query}`
 return fetch(url, { method: 'GET' })
  .then(res => res.json())
}
