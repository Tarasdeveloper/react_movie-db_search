import React from 'react';

import { GoBackBtn } from './BackLink.styled';

const BackLink = ({ location }) => {
  return (
    <>
      <GoBackBtn to={location}> &#129144; Go back</GoBackBtn>
    </>
  );
};

export default BackLink;
