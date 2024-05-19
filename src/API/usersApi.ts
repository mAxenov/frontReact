import { apiSlice } from './apiSlice';

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (body) => ({
        url: '/admin/users',
        method: 'POST',
        body,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: '/admin/users',
        method: 'GET',
      }),
    }),
  }),
});

export const { useRegistrationMutation, useGetUsersQuery } = usersApi;
