import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const MovieSearchPage = lazy(() => import('pages/MovieSearchPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const HomePage = lazy(() => import('pages/HomePage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MovieSearchPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<p>Page not found !!!</p>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
