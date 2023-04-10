import { createSlice } from '@reduxjs/toolkit';
import {
  getOwnRecipesOperation,
  deleteOwnRecipeOperation,
  addOwnRecipeOperation,
} from '../ownRecipe/ownRecipesOperation';

const pending = state => {
  state.isOwnRecipesFetching = true;
};
const rejected = state => {
  state.isOwnRecipesFetching = false;
};

const initialState = {
  isOwnRecipesFetching: false,
  ownRecipes: { recipes: [], total: 0 },
  favorites: { recipes: [], total: 0 },
  singleRecipe: null,
};

export const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getOwnRecipesOperation.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = payload.recipes;
        state.ownRecipes.total = payload.total;
        state.isOwnRecipesFetching = false;
      })
      .addCase(addOwnRecipeOperation.fulfilled, (state, { payload }) => {
        state.ownRecipes.unshift(payload);
        state.isOwnRecipesFetching = false;
      })
      .addCase(deleteOwnRecipeOperation.fulfilled, (state, { payload }) => {
        state.ownRecipes = state.ownRecipes.filter(
          recipe => recipe.idMeal !== payload.id
        );
        state.isOwnRecipesFetching = false;
      })

      .addCase(getOwnRecipesOperation.pending, pending)
      .addCase(addOwnRecipeOperation.pending, pending)
      .addCase(deleteOwnRecipeOperation.pending, pending)

      .addCase(getOwnRecipesOperation.rejected, rejected)
      .addCase(addOwnRecipeOperation.rejected, rejected)
      .addCase(deleteOwnRecipeOperation.rejected, rejected),
});

export const ownRecipeReducer = ownRecipesSlice.reducer;
export default ownRecipesSlice.reducer;
