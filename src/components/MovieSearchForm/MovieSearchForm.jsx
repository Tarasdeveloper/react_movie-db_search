import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormBtn, MovieInput } from './MovieSearchForm.styled';

const MovieSearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const queryValue = e.target.elements.search.value.trim(); // Получаем значение поля

    setSearchParams({ query: queryValue }); // Передаем значение как строку
  };

  // const handleInput = e => {
  //   setQuery(e.target.value.toLowerCase().trim());
  // };

  return (
    <form onSubmit={handleSubmit}>
      <MovieInput
        type="text"
        name="search"
        // value={query}
        // onChange={handleInput}
        placeholder="Enter movie name..."
        required
      />
      <FormBtn type="submit">Search</FormBtn>
    </form>
  );
};

export default MovieSearchForm;
