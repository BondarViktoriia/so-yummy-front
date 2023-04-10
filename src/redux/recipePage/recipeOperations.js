import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/api';

export const fetchRecipe = createAsyncThunk(
  'recipe/fetchRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/recipe/${id}`);
      console.log('response:', response);
      return response?.data.data.recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchShopList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/shoppingList`);
      console.log('response:', response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'recipe/addToFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/favorite/${id}`);
      console.log('response in addToFav:', response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'recipe/deleteFromFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/favorite/${id}`);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  'ingredient/addToShoppingList',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/shoppingList/${id}`);
      console.log('response:', response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromShoppingList = createAsyncThunk(
  'ingredient/removeFromShoppingList',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/shoppingList/${id}`);
      console.log('response:', response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
