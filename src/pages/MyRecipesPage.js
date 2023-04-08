import React from 'react';
import RecipeList from 'components/RecipeList/RecipeList';
import Title from 'components/Title/Title';
import { ContainerStyled } from 'components/Container/Container.styled';

const MyRecipesPage = () => {
  return (
    <ContainerStyled>
      <Title>My recipes</Title>
      <RecipeList recipes={[]} page="my" />
    </ContainerStyled>
  );
};

export default MyRecipesPage;
