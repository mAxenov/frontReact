import { apiSlice } from './apiSlice';
import { THotel, TSearchHotelParams } from 'src/types/hotel';

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
    getHotels: builder.query<THotel[], TSearchHotelParams>({
      query: ({ limit, offset, title }) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (offset) params.append('offset', offset.toString());
        if (title) params.append('title', title);
        return {
          url: `/common/hotels?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['Hotel'],
    }),
  }),
});

export const {
  useCreateHotelMutation,
  useGetHotelsQuery,
  useUpdateHotelMutation,
} = hotelsApi;
