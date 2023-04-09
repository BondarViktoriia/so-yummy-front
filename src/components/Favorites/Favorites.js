import RecipeItem from '../RecipeItem/RecipeItem';

import { ListSt } from '../RecipeList/RecipesList.styled';

const Favorites = ({recipes, page}) => {
    return (
      <ListSt>
      {!recipes ? <p>The list is empty</p> : (recipes.map(recipe => {
          return <RecipeItem key={recipe._id} recipe={recipe} page={page}/>;
        }))}
       </ListSt>
    )
}

export default Favorites;