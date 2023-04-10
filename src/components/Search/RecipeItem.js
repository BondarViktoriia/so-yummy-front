import { useLocation } from 'react-router-dom';
import {
  ListItem,
  LinkItem,
  ImgItem,
  ImgTitle,
  ImgWrapper,
  TitleWrapper,
} from './RecipeItem.styled';

export const RecipeItem = ({ title, preview, id }) => {
  const location = useLocation();
  return (
    <ListItem>
      <LinkItem to={{ pathname: `/recipe/${id}` }} state={{ from: location }}>
        <ImgWrapper>
          {preview && <ImgItem src={preview} alt={title} loading="lazy"/>}
          <TitleWrapper>
            <ImgTitle color="#fff">{title}</ImgTitle>
          </TitleWrapper>
        </ImgWrapper>
      </LinkItem>
    </ListItem>
  );
};
