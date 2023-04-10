import RecipeItem from '../RecipeItem/RecipeItem';
import { ListSt } from '../RecipeList/RecipesList.styled';
import {FavoritesBox, TemporaryTitle, EmptyList} from './Favorotes.styled'

const Favorites = ({recipes, page}) => {
    return (
        <FavoritesBox>
            <TemporaryTitle>Favorites</TemporaryTitle>
            <ListSt>
               {!recipes ? <EmptyList>The list is empty</EmptyList> : (recipes.map(recipe => {
                 return <RecipeItem key={recipe._id} recipe={recipe} page={page}/>;
               }))}
            </ListSt>
        </FavoritesBox>
    )
}

export default Favorites;