import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { addOwnRecipeApi, getAllCategoriesApi } from 'services/api/apiRecipe';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getOwnRecipesOperation = createAsyncThunk(
  'ownRecipes/getOwnRecipesOperation',
  async thunkAPI => {
    try {
      const data = await axios.get(`/ownRecipes`);
      console.log(data.data.data);
      return data?.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    // const state = getState();
    // const persistedAccessToken = state.auth.accessToken;
    // if (!persistedAccessToken) {
    //   return rejectWithValue();
    // }
    // token.set(persistedAccessToken);
  }
);

export const addOwnRecipeOperation = createAsyncThunk(
  'ownRecipes/addRecipe',
  async (body, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await addOwnRecipeApi(body);
      console.log('data.status:', data.status);
      console.log('own recipe successfully added', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

export const deleteOwnRecipeOperation = createAsyncThunk(
  'ownRecipes/deleteRecipe',
  async (recipeId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/ownRecipes/${recipeId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
  // async (id, { rejectWithValue, getState }) => {
  // const state = getState();
  // const persistedAccessToken = state.auth.accessToken;
  // if (!persistedAccessToken) {
  //   return rejectWithValue();
  // }
  // token.set(persistedAccessToken);
);

export const getCategoryListOperation = createAsyncThunk(
  'outerRecipes/categoryList',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getAllCategoriesApi();
      // console.log('categories list', data.meals);
      return data.meals;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);
