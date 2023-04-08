import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzA0YTEyOTg4ZDE1MDU5ZGFjYTU4NiIsImlhdCI6MTY4MDk3NjIyOCwiZXhwIjoxNjgxMDU5MDI4fQ.klbMIYx0X2YDeiatZbdBqhXgvDKcCxt9HmvMTtr7w80';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getShoppingList = createAsyncThunk(
  'shoppingList/get',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/shoppingList');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
