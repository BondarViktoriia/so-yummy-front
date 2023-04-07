import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClockIcon } from './Clock';
import {
  Wrapper,
  Title,
  Description,
  Button,
  Time,
} from './RecipeDescription.styled';
import { addToFavorite } from '../../redux/recipePage/recipeOperations';
import { selectIsFavorite } from '../../redux/recipePage/recipeSelectors';


const RecipeDescription = ({ title, description, time }) => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const fav = useSelector(selectIsFavorite);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button
        type="button"
        aria-label="add/remove to favorite"
        onClick={() => dispatch(addToFavorite(recipeId))}
      >
        {fav === true ? 'Remove from favorite' : 'Add to favorite'}
      </Button>
      <Time>
        <ClockIcon />
        <span> {time} min</span>
      </Time>
    </Wrapper>
  );
};

export default RecipeDescription;
