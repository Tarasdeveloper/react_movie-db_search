import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MovieSearchPage from 'pages/MovieSearchPage';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<p>Page not found !!!</p>} />
      </Route>
    </Routes>
  );
};
export default App;
