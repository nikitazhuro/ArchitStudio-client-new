import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { jwtDecode } from 'jwt-decode';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/',
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set(
      'Authorization',
      `Bearer ${localStorage.getItem('access_token')}`,
    );
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      '/auth/refreshTokens',
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      const { access_token } = refreshResult.data as { access_token: string };

      localStorage.setItem('access_token', access_token);

      const decodeToken = jwtDecode(access_token);

      api.dispatch({ type: 'userSlice/setUser', payload: decodeToken });

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch({ type: 'userSlice/clearUser' });
      localStorage.removeItem('access_token');

      await baseQuery('/auth/logout', api, extraOptions);

      result = { data: true };
    }
  }
  return result;
};
