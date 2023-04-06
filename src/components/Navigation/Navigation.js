import { FiSearch } from 'react-icons/fi';
import { NavItem, NavList, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/categories/:categoryName">Categories</Link>
        </NavItem>
        <NavItem>
          <Link to="/add">Add recipes</Link>
        </NavItem>
        <NavItem>
          <Link to="/my">My recipes</Link>
        </NavItem>
        <NavItem>
          <Link to="/favorite">Favorites</Link>
        </NavItem>
        <NavItem>
          <Link to="/shopping-list">Shopping list</Link>
        </NavItem>
        <NavItem>
          <Link to="/search">
            <FiSearch />
          </Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
