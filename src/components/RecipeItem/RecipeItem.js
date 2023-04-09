import { useNavigate } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useMedia } from 'hooks/useMedia';
import { deleteFromFavorite } from '../../services/api/apiRecipe'

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
} from './RecipeItem.styled';

// DeleteButtonFav, RecipeButtonFav (це для сторінки з favorite)

const RecipeItem = ({ recipe, page }) => {
  const { thumb, description, title, time } = recipe;

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
    navigate(`/recipe/${recipe._id}`);
  };

  const handleDeleteFav = (id) => {
 deleteFromFavorite(id)
  }

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
        <RecipeText>{time} min</RecipeText>
      </Wrapper>
      {/* // Кнопка видалити рецепт з favorite */}

      {page === 'favorite' && (
        <DeleteButtonFav type="button" onClick={handleDeleteFav}>
          <RiDeleteBinLine size={iconSize()} />
        </DeleteButtonFav>
      )}

      {/* // Кнопка see recipe відображається на десктопі та на планшеті */}

      {page === 'favorite' && !media.isMobileScreen && (
        <RecipeButtonFav type="button" onClick={handleSubmit}>
          See recipe
        </RecipeButtonFav>
      )}
      {page === 'my' && (
        <>
          <DeleteButtonMy type="button">
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
