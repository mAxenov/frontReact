import { apiSlice } from './apiSlice';
import { THotel } from 'src/types/hotel';

export const hotelsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createHotel: builder.mutation({
      query: (body) => ({
        url: '/admin/hotels',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Hotel'],
    }),
    updateHotel: builder.mutation({
      query: ({ id, body }) => ({
        url: `/admin/hotels/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Hotel'],
    }),
    getHotels: builder.query<THotel[], string>({
      query: () => ({
        url: '/admin/hotels',
        method: 'GET',
      }),
      providesTags: ['Hotel'],
    }),
  }),
});

export const {
  useCreateHotelMutation,
  useGetHotelsQuery,
  useUpdateHotelMutation,
} = hotelsApi;
