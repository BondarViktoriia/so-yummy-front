import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  @media (min-width: 1240px) {
    display: flex;
  }
`;
export const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media (min-width: 1240px) {
    &:not(:last-child) {
      margin-right: 30px;
      margin-bottom: 0;
    }
  }
`;
export const Link = styled(NavLink)`
  color: #23262a;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
  &.active {
    color: #8baa36;
    font-weight: 600;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
  @media (min-width: 1240px) {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
  }
`;

export const SearchThumb = styled.div`
  display: flex;
  justify-content: center;
`;
export const SearchText = styled.p`
  margin-left: 6px;
`;
