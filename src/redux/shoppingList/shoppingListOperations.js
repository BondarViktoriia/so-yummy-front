import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzA0YTEyOTg4ZDE1MDU5ZGFjYTU4NiIsImlhdCI6MTY4MTA1OTIzNywiZXhwIjoxNjgxMTQyMDM3fQ.5Itk86gjo9NozGeUjt8kwBegXxgrvNVmxRcRKKwQmTQ';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getShoppingList = createAsyncThunk(
  'shoppingList/get',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('shoppingList');
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
      const response = await axios.delete(`shoppingList/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
