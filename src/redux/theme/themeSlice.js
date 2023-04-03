import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { ...initialState },
  reducers: {
    toggleTheme(state, _) {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;