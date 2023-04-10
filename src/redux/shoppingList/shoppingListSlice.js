import { createSlice } from '@reduxjs/toolkit';
import {
  getShoppingList,
  deleteFromShoppingList,
} from './shoppingListOperations';

const initialState = {
  shoppingList: [],
  isLoading: false,
  error: null,
};

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  extraReducers: {
    [getShoppingList.pending](state) {
      state.isLoading = true;
    },
    [getShoppingList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shoppingList = action.payload;
    },
    [getShoppingList.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteFromShoppingList.pending](state) {
      state.isLoading = true;
    },
    [deleteFromShoppingList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.shoppingList = action.payload.data.ingredients;
    },
    [deleteFromShoppingList.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
