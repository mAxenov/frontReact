import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import { persistStore } from 'redux-persist';
import { apiSlice } from 'src/API/apiSlice';
import authReducer from 'src/store/slices/authSlice';
import searchReducer from 'src/store/slices/searchSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

//export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
