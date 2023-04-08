import React from 'react';
import RecipesList from 'components/RecipeList/RecipesList';
import Title from 'components/Title/Title';
import { ContainerStyled } from 'components/Container/Container.styled';

const MyRecipesPage = () => {
  return (
    <ContainerStyled>
      <Title>My recipes</Title>
      <RecipesList recipes={[]} page="my" />
    </ContainerStyled>
  );
};

export default MyRecipesPage;
