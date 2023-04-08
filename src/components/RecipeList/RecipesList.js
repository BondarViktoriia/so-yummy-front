import RecipeItem from 'components/RecipeItem/RecipeItem';

import { ListSt } from './RecipesList.styled';

const RecipesList = ({ recipes, page }) => {
  return (
    <ListSt>
      {recipes.map(recipe => {
        return <RecipeItem key={recipe._id} recipe={recipe} page={page} />;
      })}
    </ListSt>
  );
};

export default RecipesList;
