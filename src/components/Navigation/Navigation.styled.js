import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const Link = styled(NavLink)`
  color: #23262a;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  &.active {
    color: #8baa36;
  }
`;
