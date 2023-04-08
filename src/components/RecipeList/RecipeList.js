import RecipeItem from 'components/RecipeItem';

import { ListS } from './RecipeList.styled';

const RecipeList = ({ recipes, page }) => {
  return (
    <ListS>
      {recipes.map(recipe => {
        return <RecipeItem key={recipe._id} recipe={recipe} page={page} />;
      })}
    </ListS>
  );
};

export default RecipeList;
