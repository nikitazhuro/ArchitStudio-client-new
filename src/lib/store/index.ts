import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { signInSlice } from './auth/auth-slice';
import { userApi } from './api/userApi';
import { userSlice } from './user';
import { calcPageSlice } from './calc/calc-slice';
import { projectApi } from './api/projectApi';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [projectApi.reducerPath]: projectApi.reducer,

  [userSlice.name]: userSlice.reducer,
  [calcPageSlice.name]: calcPageSlice.reducer,
  [signInSlice.name]: signInSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) =>
    gDM().concat(userApi.middleware).concat(projectApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
