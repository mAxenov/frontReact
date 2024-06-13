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
    getRooms: builder.query({
      query: ({ hotel }) => {
        const params = new URLSearchParams();
        if (hotel) params.append('hotel', hotel);

        return {
          url: `/admin/hotel-rooms?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['Hotel', 'Room'],
    }),
    searchRooms: builder.query({
      query: ({ hotel, dateStart, dateEnd }) => {
        console.log(hotel, dateStart, dateEnd);
        const params = new URLSearchParams();
        if (hotel) params.append('hotel', hotel);
        if (dateStart) params.append('dateStart', dateStart);
        if (dateEnd) params.append('dateEnd', dateEnd);

        return {
          url: `/common/hotel-rooms?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['Hotel', 'Room'],
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useGetRoomsQuery,
  useSearchRoomsQuery,
} = roomsApi;
