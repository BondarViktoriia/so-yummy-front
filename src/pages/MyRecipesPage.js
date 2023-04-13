import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getOwnRecipesOperation,
  deleteOwnRecipeOperation,
} from 'redux/ownRecipe/ownRecipesOperation';
import { getRecipes, getIsLoading } from 'redux/ownRecipe/ownRecipesSelectors';

import Container from '../components/Container/Container';
import Title from 'components/Title/Title';
import PaginationComp from 'components/Pagination/Pagination';
import { Loader } from '../components/Loader/Loader.jsx';

import searchMob1x from '../image/search-page/search-mobile-1x.png';
import searchMob2x from '../image/search-page/search-mobile-2x.png';
import searchTablet1x from '../image/search-page/search-tablet-1x.png';
import searchTablet2x from '../image/search-page/search-tablet-2x.png';
import searchDesktop1x from '../image/search-page/search-dekstop-1x.png';
import searchDesktop2x from '../image/search-page/search-desktop-2x.png';

const MyRecipesPage = () => {
  const recipe = useSelector(getRecipes);

  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnRecipesOperation());
  }, [dispatch]);

  const removeOwnRecipe = id => {
    dispatch(deleteOwnRecipeOperation(id));
  };

  return (
    <Container>
      <Title>My recipes</Title>
      {isLoading && <Loader />}
      <OwnWrapper>
        {recipe.length > 0 && (
          <PaginationComp
            recipes={recipe}
            page="my"
            onDelete={removeOwnRecipe}
            itemsPerPage={2}
          />
        )}
        {recipe.length === 0 && (
          <>
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
            <EmptyList>You do not have own recipes.</EmptyList>
          </>
        )}
      </OwnWrapper>
    </Container>
  );
};

const EmptyList = styled.h2`
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: 16px;
  margin-right: 16px;

  border-radius: 10px;

  color: ${props => props.theme.colors.textPrimary};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 200px;
  font-feature-settings: 'liga' off;

  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 72px;
    margin-left: 32px;
    margin-right: 32px;

    font-size: 32px;
  }

  @media (min-width: 1440px) {
  }
`;

const PictureSearch = styled.picture`
  display: inline-block;
  margin-bottom: 32px;
`;

const OwnWrapper = styled.div`
  width: 375px;
  margin-top: 114px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export default MyRecipesPage;
