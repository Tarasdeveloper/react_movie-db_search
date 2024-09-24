import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { DetailsDiv } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const date = movieDetails ? movieDetails.release_date.slice(0, 4) : '';
  const score = movieDetails ? Math.round(movieDetails.vote_average * 10) : 0;
  const overview = movieDetails ? movieDetails.overview : '';
  const genresArray = movieDetails
    ? movieDetails.genres.map(genre => genre.name).join(', ')
    : '';

  useEffect(() => {
    if (!movieId) return; //Отклонить юзэффект при первом рендере

    const fetchMovieData = async () => {
      try {
        // setIsLoading(true);
        const movieData = await fetchMovieDetails(movieId);
        setMovieDetails(movieData);
        // toast.success('Your posts details successfully fetched', toastConfig);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        // setError(error.messag);
        // toast.error(error.message, toastConfig);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  return (
    <DetailsDiv>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/250px-No-image-available.jpg`
        }
        alt={movieDetails.title}
      />

      <div>
        <h2>
          {movieDetails.title} ({date})
        </h2>
        <p>User Score: {score ? score : 'no score'} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresArray}</p>
      </div>
    </DetailsDiv>
  );
};

export default MovieDetails;
