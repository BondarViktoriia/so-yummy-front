import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzA0YTEyOTg4ZDE1MDU5ZGFjYTU4NiIsImlhdCI6MTY4MDg4NzE5NiwiZXhwIjoxNjgwOTY5OTk2fQ.I9mjHZfsE1dxi8Tgk48ASHEZ-KiYuauCgZwKS7U0zyE';

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
