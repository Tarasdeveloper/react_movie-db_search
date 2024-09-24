import Loader from 'components/Loader/Loader';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieSearchPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const location = useLocation();

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    const searchMovieId = async () => {
      if (!currentQuery) return;
      setStatus(STATUS.PENDING);

      try {
        const data = await fetchSearchMovies(currentQuery);
        setMovies(data);
        setStatus(STATUS.RESOLVED);
        // setError('');

        if (data.length === 0) {
          setMovies([]);
          // setError("No movies found.");
          setStatus(STATUS.REJECTED);
          return;
        }
      } catch (error) {
        setStatus(STATUS.REJECTED);
        // setError(error.message);
      }
    };

    searchMovieId();
  }, [searchParams]);

  useEffect(() => {
    movies && setStatus(STATUS.RESOLVED);
  }, [movies]);

  // if (movies.length === 0) {
  //   return <p>We don't have any movie.</p>;
  // }

  return (
    <div>
      <MovieSearchForm />
      {status === STATUS.PENDING && <Loader />}
      <ul>
        {movies.length > 0 ? (
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title ? title : 'No tittle'}
              </Link>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default MovieSearchPage;
