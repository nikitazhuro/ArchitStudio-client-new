import { jwtDecode } from 'jwt-decode';

import { login, registration } from '../../http/api/auth';
import { CreateUserDto, LoginUserDto } from '../../types/user/create-user.dto';
import { IUser } from '../../types/user/login-user.dto';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (data: LoginUserDto): Promise<IUser> => {
    try {
      const response = await login(data);
      const { access_token } = response;

      localStorage.setItem('access_token', access_token);
      return jwtDecode(access_token);
    } catch (error) {
      throw new Error('Error');
    }
  },
);

export const registrateUserThunk = createAsyncThunk(
  'auth/registrate',
  async (data: CreateUserDto) => {
    try {
      const response = await registration(data);

      return response;
    } catch (error) {
      throw new Error('Error');
    }
  },
);
