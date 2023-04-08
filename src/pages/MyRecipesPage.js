import React from 'react';
import { RecipeList } from 'components/RecipeList';
import { Title } from 'components/Title';
import Container from 'components/Container/Container.styled';

const MyRecipesPage = () => {
  return (
    <Container>
      <Title>My recipes</Title>
      <RecipeList recipes={[]} page="my" />
    </Container>
  );
};

export default MyRecipesPage;
