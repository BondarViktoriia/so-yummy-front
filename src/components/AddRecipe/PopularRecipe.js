import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ItemImg,
  ItemText,
  ItemTitle,
  ItemWrapper,
  ListItemPopular,
  ListLinkPopular,
  ListPopular,
  TitlePopular,
  WrapperPopular,
} from './PopularRecipie.styled';
// import {getPopularRecipes} from '../../services/api/apiRecipe'
import {useMediaQuery } from 'react-responsive';

 const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);


  const location = useLocation();

  useEffect(() => {
    const popularRecipes = async () => {
      try {
        const response = await axios.get(
          'https://so-yummy-7n94.onrender.com/api/popular-recipe'
          );

        if (response) {
         
          setRecipes(response.data);
        }
      } catch(error) {
          console.log(error.message)
      }
    };
    popularRecipes();
  }, []);

   
  const isTablet = useMediaQuery({ minWidth:768, maxWidth:1439 });
  return (
    <WrapperPopular>
      <TitlePopular>Popular recipe</TitlePopular>
      {isTablet?(<ListPopular>
          {recipes.slice(0, 2).map(({ _id, title, description, thumb }) => (
            <ListItemPopular key={_id}>
              <ListLinkPopular to={`/recipe/${_id}`} state={{ from: location }}>
                <ItemImg src={thumb} alt="recipe-appearance" />
                <ItemWrapper>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemText>{description}</ItemText>
                </ItemWrapper>
              </ListLinkPopular>
            </ListItemPopular>
          ))}
                </ListPopular>):<ListPopular>
          {recipes.slice(0, 4).map(({ _id, title, description, thumb }) => (
            <ListItemPopular key={_id}>
              <ListLinkPopular to={`/recipe/${_id}`} state={{ from: location }}>
                <ItemImg src={thumb} alt="recipe-appearance" />
                <ItemWrapper>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemText>{description}</ItemText>
                </ItemWrapper>
              </ListLinkPopular>
            </ListItemPopular>
          ))}
                </ListPopular>}


    </WrapperPopular>
  );
};

export default PopularRecipe;