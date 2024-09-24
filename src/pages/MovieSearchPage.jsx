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

        if (data.length === 0) {
          setStatus(STATUS.REJECTED);
          setMovies([]);
          return;
        }
        setMovies(data);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
      }
    };

    searchMovieId();
  }, [searchParams]);

  return (
    <div>
      <MovieSearchForm />
      {status === STATUS.PENDING && <Loader />}
      <ul>
        {movies.length > 0 &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title ? title : 'No tittle'}
              </Link>
            </li>
          ))}
      </ul>
      {status === STATUS.REJECTED && <p>No movies found</p>}
    </div>
  );
};

export default MovieSearchPage;
