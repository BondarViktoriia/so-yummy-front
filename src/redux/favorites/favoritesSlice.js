import { createSlice } from '@reduxjs/toolkit';

import {
  addToFavorite,
  deleteFromFavorite,
  getFavorites,
} from './favoritesOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { ...initialState },
  extraReducers: {
    [addToFavorite.pending]: handlePending,
    [addToFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorites.push(action.payload.data);
      console.log('action.payload at Add recipe:', action.payload);
    },
    [addToFavorite.rejected]: handleRejected,

    [deleteFromFavorite.pending]: handlePending,
    [deleteFromFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorites = state.favorites.filter(
        recipe => recipe._id !== action.payload
      );
    },
    [deleteFromFavorite.rejected]: handleRejected,

    [getFavorites.pending]: handlePending,
    [getFavorites.fulfilled](state, action) {
      console.log('action.payload at Get Recipes:', action.payload);
      state.isLoading = false;
      state.error = null;
      state.favorites = action.payload;
    },
    [getFavorites.rejected]: handleRejected,
  },
});

export const favoritesReducer = favoritesSlice.reducer;
