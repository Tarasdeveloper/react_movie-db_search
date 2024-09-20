import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [_, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingFilm = async () => {
      setStatus(STATUS.PENDING);

      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
        setStatus(STATUS.RESOLVED);
        // setError(null);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        // setError(error.message);
      }
    };

    fetchTrendingFilm();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.length > 0 ? (
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title ? title : 'No tittle'}</Link>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
