import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { initialState } from './user-state';
import { loginUserThunk, registrateUserThunk } from './user-thunks';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.isAuth = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },

    clearRegistrationState: (state) => {
      state.isRegistrationLoading = false;
      state.isRegistrationSuccess = false;
      state.isRegistrationError = false;
    },

    clearLoginState: (state) => {
      state.isLoginLoading = false;
      state.isLoginSuccess = false;
      state.isLoginError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoginLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;

        state.isLoginLoading = false;
        state.isLoginSuccess = true;
        state.isLoginError = false;
      })
      .addCase(loginUserThunk.rejected, (state) => {
        state.isAuth = false;
        state.user = null;

        state.isLoginLoading = false;
        state.isLoginSuccess = false;
        state.isLoginError = true;
      })

      .addCase(registrateUserThunk.pending, (state) => {
        state.isRegistrationLoading = true;
      })
      .addCase(registrateUserThunk.fulfilled, (state) => {
        state.isRegistrationLoading = false;
        state.isRegistrationSuccess = true;
        state.isRegistrationError = false;
      })
      .addCase(registrateUserThunk.rejected, (state) => {
        state.isRegistrationLoading = false;
        state.isRegistrationError = true;
      });
  },
});

export const useUserSliceActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(userSlice.actions, dispatch);
};
