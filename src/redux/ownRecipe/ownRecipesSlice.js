import { createSlice } from '@reduxjs/toolkit';
import {
  getOwnRecipesOperation,
  deleteOwnRecipeOperation,
  addOwnRecipeOperation,
  getCategoryListOperation,
} from '../ownRecipe/ownRecipesOperation';

const pending = state => {
  state.isOwnRecipesFetching = true;
};
const rejected = state => {
  state.isOwnRecipesFetching = false;
};

const initialState = {
  isOwnRecipesFetching: false,
  ownRecipes: [],
  favorites: { recipes: [], total: 0 },
  singleRecipe: null,
  categoryList: [],
  isCategoryFetching: false,
};

export const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState: { ...initialState },
  extraReducers: builder =>
    builder
      .addCase(getOwnRecipesOperation.fulfilled, (state, { payload }) => {
        state.ownRecipes = payload;

        state.isOwnRecipesFetching = false;
      })
      .addCase(addOwnRecipeOperation.fulfilled, (state, { payload }) => {
        state.ownRecipes.push(payload);
        state.isOwnRecipesFetching = false;
      })
      .addCase(deleteOwnRecipeOperation.fulfilled, (state, action) => {
        const index = state.ownRecipes.findIndex(
          recipe => recipe._id === action.payload._id
        );
        state.ownRecipes.splice(index, 1);
        state.isOwnRecipesFetching = false;
      })
      .addCase(getCategoryListOperation.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
        state.isCategoryFetching = false;
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
