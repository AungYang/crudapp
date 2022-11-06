import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { postitsReducer } from './slices/postitSlice';
import { userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    postits: postitsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    console.log('getDefaultMiddleware', getDefaultMiddleware());
    return getDefaultMiddleware().concat(logger);
  },
});
