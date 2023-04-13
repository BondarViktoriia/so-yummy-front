import { useNavigate } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteFromFavorite } from '../../redux/favorites/favoritesOperations';

import { useMedia } from 'hooks/useMedia';

import {
  DeleteButtonFav,
  DeleteButtonMy,
  RecipeButtonFav,
  RecipeButtonMy,
  Item,
  RecipePic,
  RecipeTitle,
  RecipeText,
  Wrapper,
  RecipeTime
} from './RecipeItem.styled';

// DeleteButtonFav, RecipeButtonFav (це для сторінки з favorite)

const RecipeItem = ({ recipe, page, onDelete }) => {
  const { _id, thumb, description, title, time } = recipe;
  const dispatch = useDispatch();

  const splitDescr = description.split('\n');

  const navigate = useNavigate();

  const media = useMedia();

  const iconSize = () => {
    if (media.isMobileScreen) {
      return 14;
    }

    if (media.isTabletScreen) {
      return 22;
    }

    if (media.isDesktopScreen) {
      return 24;
    }
  };

  const handleSubmit = () => {
    navigate(`/recipe/${_id}`);
  };

  return (
    <Item>
      <RecipePic src={thumb} alt={title} />
      <Wrapper>
        <div>
          <RecipeTitle>{title}</RecipeTitle>
          <div>
            {splitDescr.map((elem, index) => {
              return <RecipeText key={index}>{elem}</RecipeText>;
            })}
          </div>
        </div>
        <RecipeTime>{time} min</RecipeTime>
      </Wrapper>
      {/* // Кнопка видалити рецепт з favorite */}

      {page === 'favorite' && (
        <DeleteButtonFav type="button" onClick={() => dispatch(deleteFromFavorite(_id))}>
          <RiDeleteBinLine size={iconSize()} />
        </DeleteButtonFav>
      )}

      {/* // Кнопка see recipe відображається на десктопі та на планшеті */}

      {page === 'favorite' && (
        <RecipeButtonFav type="button" onClick={handleSubmit}>
          See recipe
        </RecipeButtonFav>
      )}
      {page === 'my' && (
        <>
          <DeleteButtonMy type="button" onClick={() => onDelete(_id)}>
            <RiDeleteBinLine size={iconSize()} />
          </DeleteButtonMy>
          <RecipeButtonMy type="button" onClick={handleSubmit}>
            See recipe
          </RecipeButtonMy>
        </>
      )}
    </Item>
  );
};

export default RecipeItem;
