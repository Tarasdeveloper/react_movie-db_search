import Loader from 'components/Loader/Loader';
import Wrapper from 'components/Wrapper/Wrapper';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Links, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <header>
        <Links>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Links>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};

export default Layout;
