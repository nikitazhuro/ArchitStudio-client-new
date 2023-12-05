import { $host } from '..';

import { CreateUserDto } from '../../types/user/create-user.dto';
import { LoginUserDto } from '../../types/user/create-user.dto';

export const login = async (data: LoginUserDto) => {
  const response = await $host.post('auth/login', data, {
    withCredentials: true,
  });
  return response.data;
};

export const registration = async (data: CreateUserDto) => {
  const response = await $host.post('auth/registration', data);
  return response.data;
};

export const logout = async () => {
  await $host.get('auth/logout', {
    withCredentials: true,
  });
};

export const authCheck = async () => {
  const response = await $host.get('auth/check', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

  return response;
};
