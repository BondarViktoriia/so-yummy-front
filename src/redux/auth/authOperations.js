import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { updateUserData } from '../../services/auth/auth';

axios.defaults.baseURL = 'https://so-yummy-7n94.onrender.com/api';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmFkNzQ1MDhkYTZiMTllNjZhZWY1MSIsImlhdCI6MTY4MDk4NTM0MiwiZXhwIjoxNjgxMDY4MTQyfQ.ZizToQe-VVskGL2AXf9zNoQ9qVV7pOupv_n55i7ZZ9o`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/signup', credentials);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/signin', credentials);
      setAuthToken(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      clearAuthToken();
    } catch (error) {
      return rejectWithValue;
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (data, thunkApi) => {
    const state = thunkApi.getState();

    if (!state.auth.token) {
      return thunkApi.rejectWithValue('No valid token');
    }

    setAuthToken(state.auth.token);

    try {
      const res = await axios.get('auth/current');

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue;
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await updateUserData(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
