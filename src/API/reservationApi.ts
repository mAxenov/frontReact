import { apiSlice } from './apiSlice';

export const roomsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRoom: builder.mutation({
      query: (body) => ({
        url: '/admin/hotel-rooms',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Hotel'],
    }),
    updateRoom: builder.mutation({
      query: ({ id, body }) => ({
        url: `/admin/hotel-rooms/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Hotel', 'Room'],
    }),
    getReservationsUser: builder.query({
      query: () => {
        return {
          url: '/client/reservations',
          method: 'GET',
        };
      },
      //providesTags: ['Hotel', 'Room'],
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useGetReservationsUserQuery,
} = roomsApi;
