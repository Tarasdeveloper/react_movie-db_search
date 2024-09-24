import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { CastList, CastListItem } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return; //Отклонить юзэффект при первом рендере

    const fetchMovieData = async () => {
      try {
        // setIsLoading(true);
        const movieData = await fetchMovieCredits(movieId);
        setCredits(movieData);
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

  if (!credits) {
    return <Loader />;
  }

  if (credits.length === 0) {
    return <p>We don't have any cast for this movie.</p>;
  }

  return (
    <CastList>
      {credits.map(({ id, name, profile_path, character }) => {
        return (
          <CastListItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/200px-No-image-available.jpg`
              }
              alt={name}
            />

            {/* <h2>{name ? name : 'Without  name'}</h2> */}
            <h4>
              Character: {name || 'Without name'} / {character}
            </h4>
          </CastListItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
