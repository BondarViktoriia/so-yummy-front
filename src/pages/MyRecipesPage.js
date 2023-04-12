import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import {
  // useSelector,
  useDispatch,
} from 'react-redux';
import {
  // getOwnRecipesOperation,
  deleteOwnRecipeOperation,
} from 'redux/ownRecipe/ownRecipesOperation';

// import { getRecipes } from 'redux/ownRecipe/ownRecipesSelectors';
import { getOwnRecipes } from 'services/api/apiRecipe';

import Title from 'components/Title/Title';
import { ContainerStyled } from 'components/Container/Container.styled';

import PaginationComp from 'components/Pagination/Pagination';

// 1. Підключити лоадер
// 2. Доробити кнопку видалення

const MyRecipesPage = () => {
  // const recipes = useSelector(getRecipes);

  const [recipe, setRecipe] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        // setIsLoading(true);
        const result = await getOwnRecipes();
        // if (result === 0 || !result) {
        //   console.log('Nothing found for your request :(');
        //   // setIsLoading(false);
        //   return;
        // }
        setRecipe([...result]);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setRecipe]);

  const removeOwnRecipe = id => {
    dispatch(deleteOwnRecipeOperation(id));
  };

  return (
    <ContainerStyled>
      <Title>My recipes</Title>
      <div>
        {recipe.length > 0 && (
          <PaginationComp
            recipes={recipe}
            page="my"
            onDelete={removeOwnRecipe}
            itemsPerPage={2}
          />
        )}
        {recipe.length === 0 && (
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
