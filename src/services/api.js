import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzllZTFhYzQ1ZTIyNDkxNDFiZDczODc5NmIzNzZhZCIsIm5iZiI6MTcyNjU5ODUwOC45ODk3NzUsInN1YiI6IjY0NzlmOWQ4MGUyOWEyMDBkY2JhNDU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-cv07YItToruwIstpSYgv8zNod65kP02AnZELX1TCKY',
  },
  language: 'en - US',
  include_adult: false,
};
// homepage /trending/get-trending
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/3/trending/movie/day`, options);
  return data.results;
};
// search by key-word /search/search-movies
export const fetchSearchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}/3/search/movie?query=${query}&page=${page}`,
    options
  );
  return data.results;
};
// full info about movie /movies/get-movie-details
export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/3/movie/${movieId}`, options);
  return data;
};
// actors /movies/get-movie-credits
export const fetchMovieCredits = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits`,
    options
  );
  return data.cast;
};
// reviews request /movies/get-movie-reviews
export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/reviews`,
    options
  );
  return data.results;
};
