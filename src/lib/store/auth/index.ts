import { signInSlice, useSignInSliceActions } from './auth-slice';
import { getIsSignInOpen, getSignInDefaultState } from './auth-selectors';

export {
  // slice
  signInSlice,
  // actions-creators
  useSignInSliceActions,
  // selectors
  getIsSignInOpen,
  getSignInDefaultState,
};
