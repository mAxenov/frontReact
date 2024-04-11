import { createSlice } from '@reduxjs/toolkit';
import { authApi } from 'src/API/authApi';
import { TUser } from 'src/types/auth.type';

const initialState = {
  user: null,
  isAuthenticated: false,
} as { user: null | TUser; isAuthenticated: boolean };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, () => initialState);
  },
});

export default slice.reducer;
