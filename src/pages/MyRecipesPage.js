import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOwnRecipesOperation,
  deleteOwnRecipeOperation,
} from 'redux/ownRecipe/ownRecipesOperation';
import { getRecipes } from 'redux/ownRecipe/ownRecipesSelectors';

// import RecipesList from 'components/RecipeList/RecipesList';

import Title from 'components/Title/Title';
import { ContainerStyled } from 'components/Container/Container.styled';

import PaginationComp from 'components/Pagination/Pagination';

// const recipesTest = [
//   {
//     _id: '640cd5ac2d9fecf12e8897fc',
//     title: 'Spaghetti Bolognese',
//     description:
//       'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
//     thumb: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
//     time: '45',
//   },
//   {
//     _id: '640cd5ac2d9fecf12e8897f0',
//     title: 'Teriyaki Chicken Casserole',
//     description:
//       'A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.',
//     thumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
//     time: '75',
//   },
//   {
//     _id: '640cd5ac2d9fecf12e8897f5',
//     title: 'Mediterranean Pasta Salad',
//     description:
//       'A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.',
//     thumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
//     time: '27',
//   },
//   {
//     _id: '640cd5ac2d9fecf12e8897f3',
//     title: 'Vegan Lasagna',
//     description:
//       'A plant-based version of the classic Italian dish, made with layers of pasta, tomato sauce, vegan cheese, and vegetables (such as spinach, zucchini, and mushrooms).',
//     thumb: 'https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg',
//     time: '50',
//   },
// ];

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
          <>
            <PaginationComp
              recipes={recipes.recipes}
              page="my"
              onDelete={removeOwnRecipe}
              itemsPerPage={2}
            />
          </>
        )}
        {recipes.recipes.length === 0 && (
          <EmptyList>We are sorry, but You do not have own recipes.</EmptyList>
        )}
      </div>
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
