import { createSlice } from '@reduxjs/toolkit';
import {
  getAllIngredients,
} from './ingredientsOperation';


const pending = state => {
  state.isIngredientsFetching = true;
};
const rejected = state => {
  state.isIngredientsFetching = false;
};


const initialState = {
  isIngredientsFetching: false,
  ingredients: [],
  recipesByIngredients: [],
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllIngredients.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
        state.isIngredientsFetching = false;
      })

      .addCase(getAllIngredients.pending, pending)

      .addCase(getAllIngredients.rejected, rejected)
});

export const ingredientsReducer = ingredientsSlice.reducer;
