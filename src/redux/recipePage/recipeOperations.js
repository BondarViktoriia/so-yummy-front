import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipe = createAsyncThunk(
  'recipe/fetchRecipe',
  async (id, thunkAPI) => {
    
    try {
      const response = await axios.get(`/recipes/recipe/${id}`);
      if (response.status === 304) {
        return;
      }
      return response?.data.data.recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchShoppingList = createAsyncThunk(
//   'shoppingList/fetchShopList',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`/shoppingList`);
//       console.log('response:', response.data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addToShoppingList = createAsyncThunk(
//   'ingredient/addToShoppingList',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.post(`/shoppingList/${id}`);
//       console.log('response:', response);
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const removeFromShoppingList = createAsyncThunk(
//   'ingredient/removeFromShoppingList',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/shoppingList/${id}`);
//       console.log('response:', response);
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
