import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getOwnRecipes,
  deleteOwnRecipe,
  addOwnRecipeApi,
  getAllCategoriesApi
} from 'services/api/apiRecipe';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getOwnRecipesOperation = createAsyncThunk(
  'ownRecipes/getRecipes',
  async ({ page, per_page }, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getOwnRecipes(page ?? null, per_page ?? null);
      console.log('own recipes', data);
      return { recipes: data.meals, total: data.totalHits };
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
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
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await deleteOwnRecipe(id);
      console.log('own recipe successfully deleted', data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
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