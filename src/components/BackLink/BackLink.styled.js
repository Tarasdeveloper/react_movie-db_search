import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackBtn = styled(NavLink)`
  border: 1px solid #b5b5b5;
  margin-bottom: 10px;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: blueviolet;
    border: 1px solid blueviolet;
  }
`;
