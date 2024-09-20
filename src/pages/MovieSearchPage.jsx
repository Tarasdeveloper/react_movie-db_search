import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

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
          // setError("Movie don't find.");
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

  const handleSubmit = e => {
    e.preventDefault();
    const queryValue = e.target.elements.search.value.trim(); // Получаем значение поля
    if (queryValue) {
      setSearchParams({ query: queryValue }); // Передаем значение как строку
    }
  };

  // const handleInput = e => {
  //   setQuery(e.target.value.toLowerCase().trim());
  // };

  useEffect(() => {
    movies && setStatus(STATUS.RESOLVED);
  }, [movies]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          // value={query}
          placeholder="Enter movie..."
          // onChange={handleInput}
        />
        <button type="submit">Search</button>
      </form>
      {status === STATUS.PENDING && <Loader />}
      <ul>
        {movies.length > 0 ? (
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title ? title : 'No tittle'}</Link>
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
