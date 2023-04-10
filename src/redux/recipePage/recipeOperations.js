import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmFkNzQ1MDhkYTZiMTllNjZhZWY1MSIsImlhdCI6MTY4MTE0MzY0MCwiZXhwIjoxNjgxMjI2NDQwfQ.fC-a4rwC67zeCwv6B_10x3au6LLCbN9smyxvrsVIHt0';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/api';

// const setAuthToken = () => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// setAuthToken();

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
