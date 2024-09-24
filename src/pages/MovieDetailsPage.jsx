import AddInfo from 'components/AddInfo/AddInfo';
import BackLink from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <div>
      <BackLink location={backLinkHref.current} />
      <MovieDetails />
      <AddInfo />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
