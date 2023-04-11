import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzA0YTEyOTg4ZDE1MDU5ZGFjYTU4NiIsImlhdCI6MTY4MTE0NjYyNiwiZXhwIjoxNjgxMjI5NDI2fQ.npkLurx2hYDRKe2uNa60tgfjheS5aIDRyAukQ7rTjIo';

// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getShoppingList = createAsyncThunk(
  'shoppingList/get',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/shoppingList');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromShoppingList = createAsyncThunk(
  'shoppingList/delete',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/shoppingList/${id}`);
      console.log('response.data in deleteFromShoppingList:', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  'shoppingList/add',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/shoppingList`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
