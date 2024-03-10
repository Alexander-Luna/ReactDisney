import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "113394dbab25d9e65c61321059b32977";
const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseUrl + "?api_key=" + api_key + "&with_genre=" + id);
export default {
  getTrendingVideos,
  getMovieByGenreId,
};
