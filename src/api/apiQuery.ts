import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from './tokenHelper';
import { baseUrl } from './api';
import { IUser, IUserCreatePayload } from './contracts';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) headers.set('authorization', token);

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    newUser: builder.mutation<IUser, IUserCreatePayload>({
      query(body) {
        return {
          url: 'signup',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});
