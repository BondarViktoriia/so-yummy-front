import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/api';

export const getFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(`/favorite`);
      return response.data?.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'favorites/addToFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/favorite/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'favorites/deleteFromFavorite',
  async (id, thunkAPI) => {
    try {
      await axios.patch(`/favorite/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
