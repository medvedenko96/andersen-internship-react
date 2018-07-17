export default function queryFilms(query) {
  let url = `http://api.tvmaze.com/search/shows?q=${query}`;
   fetch(url, { method: 'GET' })
  .then(res => res.json())
  .then(json => json)

}
