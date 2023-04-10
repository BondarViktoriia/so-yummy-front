import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipe,
  addToFavorite,
  deleteFromFavorite,
  fetchShoppingList,
  addToShoppingList,
  removeFromShoppingList,
} from './recipeOperations';

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
  isFavorite: false,
  isLoading: false,
  error: null,
  shoppingList: null,
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
      console.log('action.payload:', action.payload);
    },
    [fetchRecipe.rejected]: handleRejected,
    [addToFavorite.pending]: handlePending,
    [addToFavorite.fulfilled](state, _) {
      state.isLoading = false;
      state.error = null;
      state.isFavorite = true;
    },
    [addToFavorite.rejected]: handleRejected,
    [deleteFromFavorite.pending]: handlePending,
    [deleteFromFavorite.fulfilled](state, _) {
      state.isLoading = false;
      state.error = null;
      state.isFavorite = false;
    },
    [deleteFromFavorite.rejected]: handleRejected,
    [fetchShoppingList.pending]: handlePending,
    [fetchShoppingList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shoppingList = action.payload;
    },
    [fetchShoppingList.rejected]: handleRejected,

    [addToShoppingList.pending]: handlePending,
    [addToShoppingList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shoppingList = action.payload;
    },
    [addToShoppingList.rejected]: handleRejected,

    [removeFromShoppingList.pending]: handlePending,
    [removeFromShoppingList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shoppingList = action.payload;
    },
    [removeFromShoppingList.rejected]: handleRejected,
  },
});

export const recipeReducer = recipeSlice.reducer;
