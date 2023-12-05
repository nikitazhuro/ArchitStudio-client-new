import {
  getUser,
  getIsAuth,
  getRegistrationLoading,
  getRegistrationSuccess,
  getRegistrationError,
  getLoginLoading,
  getLoginSuccess,
  getLoginError,
} from './user-selectors';
import { loginUserThunk, registrateUserThunk } from './user-thunks';
import { userSlice, useUserSliceActions } from './user-slice';

export {
  // slice
  userSlice,
  // actions-creators
  useUserSliceActions,
  // async-thunks
  loginUserThunk,
  registrateUserThunk,
  // selectors
  getUser,
  getIsAuth,
  getRegistrationLoading,
  getRegistrationSuccess,
  getRegistrationError,
  getLoginLoading,
  getLoginSuccess,
  getLoginError,
};
