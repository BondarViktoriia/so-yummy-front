import { useLocation } from 'react-router-dom';
import {
  ListItem,
  LinkItem,
  ImgItem,
  ImgTitle,
  ImgWrapper,
  TitleWrapper,
} from './RecipeItem.styled';

const RecipeItem = ({ title, preview, _id }) => {
  console.log(_id);
  const location = useLocation();
  return (
    <ListItem>
      <LinkItem to={{ pathname: `/recipe/${_id}` }} state={{ from: location }}>
        <ImgWrapper>
          {preview && <ImgItem src={preview} alt={title} loading="lazy" />}
          <TitleWrapper>
            <ImgTitle color="#fff">{title}</ImgTitle>
          </TitleWrapper>
        </ImgWrapper>
      </LinkItem>
    </ListItem>
  );
};

export default RecipeItem;
