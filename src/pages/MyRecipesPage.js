import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOwnRecipesOperation,
  deleteOwnRecipeOperation,
} from 'redux/ownRecipe/ownRecipesOperation';
import { getRecipes } from 'redux/ownRecipe/ownRecipesSelectors';
import RecipesList from 'components/RecipeList/RecipesList';
import Title from 'components/Title/Title';
import { ContainerStyled } from 'components/Container/Container.styled';

const MyRecipesPage = () => {
  const recipes = useSelector(getRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnRecipesOperation());
  }, [dispatch]);

  const removeOwnRecipe = id => {
    dispatch(deleteOwnRecipeOperation(id));
  };

  return (
    <ContainerStyled>
      <Title>My recipes</Title>
      <div>
        {recipes.recipes.length > 0 && (
          <RecipesList
            recipes={recipes.recipes}
            page="my"
            onDeleteOwnRecipe={removeOwnRecipe}
          />
        )}
        {recipes.recipes.length === 0 && (
          <EmptyList>We are sorry, but You do not have own recipes.</EmptyList>
        )}
      </div>
      {/* <RecipesList recipes={[]} page="my" /> */}
    </ContainerStyled>
  );
};

const EmptyList = styled.h2`
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: 16px;
  margin-right: 16px;

  border-radius: 10px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.colors.title};

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

export default MyRecipesPage;
