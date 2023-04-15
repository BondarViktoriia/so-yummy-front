import { useLocation } from 'react-router-dom';
import {
  ListItem,
  LinkItem,
  ImgItem,
  ImgTitle,
  ImgWrapper,
  TitleWrapper,
} from './RecipeItem.styled';

const RecipeItem = ({ recipe }) => {
  // console.log(recipe._id);
  const location = useLocation();
  return (
    <ListItem>
      <LinkItem
        to={{ pathname: `/recipe/${recipe._id}` }}
        state={{ from: location }}
      >
        <ImgWrapper>
          {recipe.preview && (
            <ImgItem src={recipe.preview} alt={recipe.title} loading="lazy" />
          )}
          <TitleWrapper>
            <ImgTitle color="#fff">{recipe.title}</ImgTitle>
          </TitleWrapper>
        </ImgWrapper>
      </LinkItem>
    </ListItem>
  );
};

export default RecipeItem;
