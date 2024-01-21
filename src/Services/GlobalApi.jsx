import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "5ada131cbf2c4f0f2c3d79c27a3e7e01";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=5ada131cbf2c4f0f2c3d79c27a3e7e01";

//https://api.themoviedb.org/3/trending/all/day?api_key=5ada131cbf2c4f0f2c3d79c27a3e7e01

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
