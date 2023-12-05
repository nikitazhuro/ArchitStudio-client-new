import { get } from 'lodash';

import { RootState } from '../index';

export const getUser = (state: RootState) =>
  get(state, ['userSlice', 'user'], null);

export const getIsAuth = (state: RootState) =>
  get(state, ['userSlice', 'isAuth'], null);

export const getRegistrationLoading = (state: RootState) =>
  get(state, ['userSlice', 'isRegistrationLoading'], null);

export const getRegistrationSuccess = (state: RootState) =>
  get(state, ['userSlice', 'isRegistrationSuccess'], null);

export const getRegistrationError = (state: RootState) =>
  get(state, ['userSlice', 'isRegistrationError'], null);

export const getLoginLoading = (state: RootState) =>
  get(state, ['userSlice', 'isLoginLoading'], null);

export const getLoginSuccess = (state: RootState) =>
  get(state, ['userSlice', 'isLoginSuccess'], null);

export const getLoginError = (state: RootState) =>
  get(state, ['userSlice', 'isLoginError'], null);
