import { RecipeItem } from 'components/RecipeItem';

import { List } from 'styled-components';

const RecipeList = ({ recipes, page }) => {
  return (
    <List>
      {recipes.map(recipe => {
        return <RecipeItem key={recipe._id} recipe={recipe} page={page} />;
      })}
    </List>
  );
};

export default RecipeList;
