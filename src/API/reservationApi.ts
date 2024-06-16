import { apiSlice } from './apiSlice';

export const roomsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReservation: builder.mutation({
      query: (body) => ({
        url: '/client/reservations',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Reservation', 'Hotel', 'Room'],
    }),
    canselReservation: builder.mutation({
      query: (id) => ({
        url: `/client/reservations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservation', 'Hotel', 'Room'],
    }),
    canselReservationManager: builder.mutation({
      query: (id) => ({
        url: `/manager/reservations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservation', 'Hotel', 'Room'],
    }),
    getReservationsUser: builder.query({
      query: () => {
        return {
          url: '/client/reservations',
          method: 'GET',
        };
      },
      providesTags: ['Reservation'],
    }),
    getReservationsByUserId: builder.query({
      query: (userId) => {
        return {
          url: '/manager/reservations/' + userId,
          method: 'GET',
        };
      },
      providesTags: ['Reservation'],
    }),
  }),
});

export const {
  useCreateReservationMutation,
  useCanselReservationMutation,
  useGetReservationsByUserIdQuery,
  useGetReservationsUserQuery,
  useCanselReservationManagerMutation,
} = roomsApi;
