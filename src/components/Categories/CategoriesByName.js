import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
import * as API from '../../services/api/apiRecipe';

import { RecipeItem } from '../Search/RecipeItem';
import { Loader } from '../Loader/Loader';

import { RecipesList } from './CategoriesByName.styled';

const CategoriesByName = () => {
  const { categoryName: category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector(selectToken);

  useEffect(() => {
    async function getRecipesByCategory(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      try {
        setIsLoading(true);
        const {
          data: {
            data: { result },
          },
        } = await API.getRecipeByCategory(category, token);
        setRecipes(result);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }
    console.log(token);
    getRecipesByCategory(token);
  }, [category, token]);

  return (
    <>
      {isLoading && <Loader />}
      {recipes.length > 0 && !error && !isLoading && (
        <RecipesList>
          {recipes.map(recipe => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </RecipesList>
      )}
    </>
  );
};

export default CategoriesByName;
