import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
import { getRecipeByCategory } from '../../services/api/apiRecipe';

import RecipeItem from './RecipeItem';
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
    // console.log(token);
    // console.log(category);
  }, [category, token]);

  const recipesArray = recipes.result;

  return (
    <>
      {isLoading && <Loader />}
      {recipesArray && !error && !isLoading && (
        <RecipesList>
          {recipesArray.slice(0, 8).map(recipe => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </RecipesList>
      )}
    </>
  );
};

export default CategoriesByName;
