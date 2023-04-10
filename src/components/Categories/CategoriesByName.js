import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as API from '../../services/api/apiRecipe';

import RecipeItem from 'components/RecipeItem/RecipeItem';

import { RecipesList } from './CategoriesByName.styled';

const CategoriesByName = () => {
  const { categoryName: category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getRecipesByCategory() {
      try {
        setIsLoading(true);
        const {
          data: {
            data: { result },
          },
        } = await API.getRecipeByCategory(category);
        setRecipes(result);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }
    getRecipesByCategory();
  }, [category]);

  return (
    <>
      {recipes.length > 0 && !error && !isLoading && (
        <RecipesList>
          {recipes.map(recipe => {
            return <RecipeItem dish={recipe} key={recipe._id} />;
          })}
        </RecipesList>
      )}
      {!isLoading && !error && recipes.length === 0};
    </>
  );
};

export default CategoriesByName;
