import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { RecipeDescription } from '../components/Recipe';
import { RecipeList } from '../components/Recipe';
import { RecipePreparation } from '../components/Recipe';
import Container from '../components/Container/Container';

import {
  selectRecipe,
  selectIsLoading,
  selectError,
  // selectOwnRecipe,
} from '../redux/recipePage/recipeSelectors';
import { fetchRecipe } from '../redux/recipePage/recipeOperations';
import { Loader } from '../components/Loader/Loader';

const RecipePage = () => {
  const dispatch = useDispatch();
  const currentRecipe = useSelector(selectRecipe);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [fetched, setFetched] = useState(false);

  // const ownRecipe = useSelector(selectOwnRecipe);

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId)).then(setFetched(true));
    window.scrollTo(0, 0);
  }, [dispatch, recipeId]);

  const showError = error || !currentRecipe;

  return (
    <Container>
      {isLoading && <Loader></Loader>}
      {showError && <ErrorPage></ErrorPage>}
      {fetched && !isLoading && currentRecipe && !showError && (
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
    </Container>
  );
};

export default RecipePage;
