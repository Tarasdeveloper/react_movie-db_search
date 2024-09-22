import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Links = styled.nav`
  display: flex;
  gap: 15px;
  padding: 15px 25px;
  box-shadow: 0 0 15px #15151559;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;

  &.active {
    color: #db123f;
  }

  &:hover {
    text-decoration: underline;
  }
`;
