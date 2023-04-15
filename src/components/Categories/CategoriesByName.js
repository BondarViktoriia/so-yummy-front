import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
// import * as API from '../../services/api/apiRecipe';
import { getRecipeByCategory } from '../../services/api/apiRecipe';

import { RecipeItem } from '../Search/RecipeItem';
import { Loader } from '../Loader/Loader';

import { RecipesList } from './CategoriesByName.styled';

const CategoriesByName = () => {
  const { categoryName: category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [error] = useState(null);
  const [isLoading] = useState(false);
  const token = useSelector(selectToken);

  useEffect(() => {
    async function getRecipesByCategory(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      try {
        const response = await getRecipeByCategory(category, token);

        if (response) {
          setRecipes(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getRecipesByCategory(category, token);
    console.log(token);
    console.log(category);
  }, [category, token]);

  return (
    <>
      {isLoading && <Loader />}
      {recipes.length > 0 && !error && !isLoading && (
        <RecipesList>
          {recipes.map(recipe => {
            console.log(recipe);
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </RecipesList>
      )}
    </>
  );
};

export default CategoriesByName;
