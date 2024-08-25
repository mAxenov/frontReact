import {
  TGetSupportRequests,
  TMessage,
  TSupportRequest,
} from 'src/types/supportRequests.type';
import { apiSlice } from './apiSlice';

export const hotelsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSupportRequest: builder.mutation({
      query: (body) => ({
        url: '/client/support-requests/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['SupportRequest'],
    }),
    getSupportRequests: builder.query<TSupportRequest[], TGetSupportRequests>({
      query: ({ limit, offset, isActive }) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (offset) params.append('offset', offset.toString());
        params.append('isActive', isActive.toString());
        return {
          url: `/client/support-requests/?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['SupportRequest'],
    }),
    sendSupportRequestMessage: builder.mutation({
      query: ({ body, id }) => ({
        url: `/common/support-requests/${id}/messages`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['SupportRequest'],
    }),
    getSupportRequestsMessage: builder.query<TMessage[], string>({
      query: (id) => {
        return {
          url: `/common/support-requests/${id}/messages`,
          method: 'GET',
        };
      },
      providesTags: ['SupportRequest'],
    }),
  }),
});

export const {
  useCreateSupportRequestMutation,
  useGetSupportRequestsQuery,
  useGetSupportRequestsMessageQuery,
  useSendSupportRequestMessageMutation,
} = hotelsApi;
