import React from 'react';
import { Link } from 'react-router-dom';
import { AddinfoDiv } from './AddInfo.styled';

const AddInfo = () => {
  return (
    <AddinfoDiv>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </AddinfoDiv>
  );
};

export default AddInfo;
