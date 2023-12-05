import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../../http/baseQueryWithReauth';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    authCheck: builder.mutation<boolean | undefined, void>({
      query: () => `auth/check`,
    }),
  }),
});

export const { useAuthCheckMutation } = userApi;
