import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { initialState } from './auth-state';

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setIsSignInOpen(state, action) {
      state.isSignInOpen = action.payload;
    },
    setDefaultState(state, action) {
      state.defaultState = action.payload;
    },
  },
});

export const useSignInSliceActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(signInSlice.actions, dispatch);
};
