import { ClockIcon } from './Clock';
import {
  Wrapper,
  Title,
  Description,
  Button,
  Time,
} from './RecipeDescription.styled';

const RecipeDescription = ({ title, description, time }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button type="button" aria-label="add to favorite">
        Add to favorite recipes
      </Button>
      <Time>
        <ClockIcon />
        <span> {time} min</span>
      </Time>
    </Wrapper>
  );
};

export default RecipeDescription;
