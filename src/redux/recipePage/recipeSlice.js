import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipe } from './recipeOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

//slice for recipe page

const initialState = {
  recipe: null,
  ownRecipe: false,
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: { ...initialState },
  extraReducers: {
    [fetchRecipe.pending]: handlePending,
    [fetchRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipe = action.payload[0];
    },
    [fetchRecipe.rejected]: handleRejected,
  },
});

export const recipeReducer = recipeSlice.reducer;
