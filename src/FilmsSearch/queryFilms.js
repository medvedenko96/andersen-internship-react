export default function queryFilms(query) {
  let url = `http://api.tvmaze.com/search/shows?q=${query}`;

   return fetch(url)
  .then(res => res.json())
  .then(json => json)
}
