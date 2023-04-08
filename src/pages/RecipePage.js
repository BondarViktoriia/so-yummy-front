import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeDescription } from '../components/Recipe';
import { RecipeList } from '../components/Recipe';
import { RecipePreparation } from '../components/Recipe';

import {
  selectRecipe,
  // selectIsLoading,
  // selectError,
  // selectOwnRecipe,
} from '../redux/recipePage/recipeSelectors';
import { fetchRecipe } from '../redux/recipePage/recipeOperations';

const RecipePage = () => {
  const dispatch = useDispatch();
  const currentRecipe = useSelector(selectRecipe);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const ownRecipe = useSelector(selectOwnRecipe);

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, [dispatch, recipeId]);

  return (
    <>
      {/* {error && <h1>There will be error component</h1>} */}
      {currentRecipe && (
      {Object.keys(currentRecipe).length > 0 && (
        <>
          <RecipeDescription
            title={currentRecipe.title}
            description={currentRecipe.description}
            time={currentRecipe.time}
          ></RecipeDescription>
          <RecipeList ingreds={currentRecipe.ingredients}></RecipeList>
          <RecipePreparation
            instructions={currentRecipe.instructions}
            image={currentRecipe.thumb}
          ></RecipePreparation>
        </>
      )}
    </>
  );
};

export default RecipePage;
