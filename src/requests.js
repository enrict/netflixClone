// sets the Key constant which will be used in all the endpoints
import { KEY } from "src/api.js";

// exports all the endpoints that will be used
export default {
  fetchTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
  fetchMysteryMovies: `/discover/movie?api_key=${KEY}&with_genres=9648`,
  fetchScifiMovies: `/discover/movie?api_key=${KEY}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${KEY}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${KEY}&with_genres=16`,
  fetchSeries: `/discover/movie?api_key=${KEY}&with_genres=10770`,
};
