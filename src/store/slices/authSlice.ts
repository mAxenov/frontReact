import { createSlice } from '@reduxjs/toolkit';
import { authApi } from 'src/API/authApi';
import { TUser } from 'src/types/auth.type';

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
} as { user: null | TUser; isAuthenticated: boolean; token: string | null };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        slice.caseReducers.setCredentials(state, action);
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        slice.caseReducers.logout(state);
      })
      .addMatcher(
        authApi.endpoints.checkAuth.matchFulfilled,
        (state, action) => {
          slice.caseReducers.setCredentials(state, action);
        }
      );
  },
});

export const { setCredentials, logout } = slice.actions;
export default slice.reducer;
