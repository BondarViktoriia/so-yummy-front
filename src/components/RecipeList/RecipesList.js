import RecipeItem from 'components/RecipeItem/RecipeItem';

import { ListSt } from './RecipesList.styled';

const RecipesList = ({ recipes, page, onDelete }) => {
  return (
    <ListSt>
      {recipes.map(recipe => {
        return (
          <RecipeItem
            key={recipe._id}
            recipe={recipe}
            page={page}
            onDelete={onDelete}
          />
        );
      })}
    </ListSt>
  );
};

export default RecipesList;
