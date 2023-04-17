import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

import {
  NavItem,
  NavList,
  Link,
  SearchThumb,
  SearchText,
} from './Navigation.styled';

export const Navigation = Х => {
  const location = useLocation();
  const isRecipePage = location.pathname.includes('/recipe/');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link
            to="/categories/:categoryName"
            color={isRecipePage ? '#23262A' : undefined}
            aria-label='categories'
          >
            Categories
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/add" color={isRecipePage ? '#23262A' : undefined}       aria-label='add'
>
            Add recipes
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/my" color={isRecipePage ? '#23262A' : undefined}
                                  aria-label='my'
>
            My recipes
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/favorite" color={isRecipePage ? '#23262A' : undefined}
                        aria-label='favorite'

          >
            Favorites
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/shopping-list"
            color={isRecipePage ? '#23262A' : undefined}
            aria-label='shopping-list'
          >
            Shopping list
          </Link>
        </NavItem>
        <NavItem>
          <IconContext.Provider value={{ style: { width: 24, height: 24 } }}>
            <Link to="/search" aria-label='search' color={isRecipePage ? '#23262A' : undefined}>
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
