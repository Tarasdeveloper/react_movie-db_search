import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return; //Отклонить юзэффект при первом рендере

    const fetchMovieData = async () => {
      try {
        // setIsLoading(true);
        const movieData = await fetchMovieReviews(movieId);
        setReviews(movieData);
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

  if (!reviews || reviews.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <span>{author}</span>
              <p>
                <span>Reviews: </span>
                {content}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
