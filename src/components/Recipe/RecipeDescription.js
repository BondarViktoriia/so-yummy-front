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
  // addToFavorite,
  deleteFromFavorite,
  getFavorites,
} from '../../redux/favorites/favoritesOperations';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';

const RecipeDescription = ({ title, description, time }) => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log('RecipeDescription   favorites:', favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button
        type="button"
        aria-label="add/remove to favorite"
        onClick={() => dispatch(deleteFromFavorite(recipeId))}
      >
        {'Add to favorite recipes'}
      </Button>
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
