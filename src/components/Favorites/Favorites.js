import RecipeItem from '../RecipeItem/RecipeItem';

import { ListSt } from '../RecipeList/RecipesList.styled';

const Favorites = ({recipes, page}) => {
    return (
      <ListSt>
        <div>Hello</div>
        {recipes.map(recipe => {
          return <RecipeItem key={recipe._id} recipe={recipe} page={page}/>;
        })}
       </ListSt>
    )
}

export default Favorites;