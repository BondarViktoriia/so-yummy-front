import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../redux/favorites/favoritesOperations';
// import Favorite from '../components/Favorites';
import Title from '../components/Title/Title';
import Container from '../components/Container/Container';
import { EmptyList,PictureSearch,SearchWrapper } from '../components/Favorites/Favorotes.styled';
import {
  selectFavorites,
  selectError,
  selectIsLoading,
} from '../redux/favorites/favoritesSelectors';

import PaginationComp from 'components/Pagination/Pagination';
import searchMob1x from '../image/search-page/search-mobile-1x.png';
import searchMob2x from '../image/search-page/search-mobile-2x.png';
import searchTablet1x from '../image/search-page/search-tablet-1x.png';
import searchTablet2x from '../image/search-page/search-tablet-2x.png';
import searchDesktop1x from '../image/search-page/search-dekstop-1x.png';
import searchDesktop2x from '../image/search-page/search-desktop-2x.png';



const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <Container>
            <Title>Favorites</Title>
      <SearchWrapper>

      <PaginationComp recipes={favorites} itemsPerPage={2} page="favorite" />
      {/* <Favorite recipes={recipesTest} page="favorite" /> */}
      {/* {favorites.length > 0 && <Favorite recipes={favorites} page="favorite"/>} */}
              {favorites.length === 0 && (
          <PictureSearch>
            <source
              media="(min-width: 1440px)"
              srcSet={`${searchDesktop1x}, ${searchDesktop2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${searchTablet1x}, ${searchTablet2x} 2x`}
            />
            <img
              src={searchMob1x}
              srcSet={`${searchMob1x}, ${searchMob2x} 2x`}
              alt="Ошибка"
            />
          </PictureSearch>
        )}
      {favorites.length === 0 && !isLoading && !error && (
        <EmptyList>The list is empty</EmptyList>
        )}
        </SearchWrapper>
    </Container>
  );
};

export default FavoritesPage;
