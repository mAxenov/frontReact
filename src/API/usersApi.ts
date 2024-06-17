import { apiSlice } from './apiSlice';

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registrationAdmin: builder.mutation({
      query: (body) => ({
        url: '/admin/users',
        method: 'POST',
        body,
      }),
    }),
    getUsers: builder.query({
      query: ({ role, searchParams, limit = 10, offset }) => {
        const params = new URLSearchParams();
        if (searchParams) params.append('searchParams', searchParams);
        if (limit) params.append('limit', limit);
        if (offset) params.append('offset', offset);

        return {
          url: `/${role}/users?${params.toString()}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useRegistrationAdminMutation, useGetUsersQuery } = usersApi;
