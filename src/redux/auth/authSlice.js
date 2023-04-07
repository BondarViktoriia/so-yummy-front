import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  accessToken: null,
  isLoggedIn: false,
  isUserFetching: false,
  userData: {
    email: null,
    name: null,
    avatar: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
    initialState,
    reducers: {
        
    }

});

export default authSlice.reducer;
