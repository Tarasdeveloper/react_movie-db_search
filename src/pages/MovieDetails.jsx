import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/250px-No-image-available.jpg`
        }
        alt={movieDetails.title}
      />
      <h3>{movieDetails.title}</h3>
    </div>
  );
};

export default MovieDetails;
