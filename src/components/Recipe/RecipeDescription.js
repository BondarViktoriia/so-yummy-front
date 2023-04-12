import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock } from './ClockIcon';

import {
  Wrapper,
  Title,
  Description,
  Button,
  Time,
} from './RecipeDescription.styled';
import {
  addToFavorite,
  deleteFromFavorite,
  getFavorites,
} from '../../redux/favorites/favoritesOperations';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { selectOwnRecipe } from '../../redux/recipePage/recipeSelectors';

const RecipeDescription = ({ title, description, time }) => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isOwn = useSelector(selectOwnRecipe);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const isInFavCollection = favorites.find(item => item._id === recipeId);

  function toggleFav() {
    if (isInFavCollection) {
      dispatch(deleteFromFavorite(recipeId));
    } else {
      dispatch(addToFavorite(recipeId));
    }
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {!isOwn && (
        <Button
          type="button"
          aria-label="add/remove to favorite"
          onClick={toggleFav}
        >
          {isInFavCollection
            ? 'Remove from favorite recipes'
            : 'Add to favorite recipes'}
        </Button>
      )}
      {time !== '' && (
        <Time>
          <Clock></Clock>
          <span> {time} min</span>
        </Time>
      )}
    </Wrapper>
  );
};

export default RecipeDescription;
