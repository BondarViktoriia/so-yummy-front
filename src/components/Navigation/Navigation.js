import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive';
import {
  NavItem,
  NavList,
  Link,
  SearchThumb,
  SearchText,
} from './Navigation.styled';

export const Navigation = Х => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });
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
          <IconContext.Provider value={{ style: { width: 24, height: 24 } }}>
            <Link to="/search">
              <SearchThumb>
                <FiSearch />
                {isTabletOrMobile && <SearchText>Search</SearchText>}
              </SearchThumb>
            </Link>
          </IconContext.Provider>
        </NavItem>
      </NavList>
    </nav>
  );
};
