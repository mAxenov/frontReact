import {
  TGetSupportRequests,
  TSupportMessages,
  TSupportRequest,
} from 'src/types/supportRequests.type';
import { apiSlice } from './apiSlice';

export const hotelsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSupportRequest: builder.mutation({
      query: (body) => ({
        url: `/client/support-requests/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['SupportRequest'],
    }),
    getSupportRequests: builder.query<TSupportRequest[], TGetSupportRequests>({
      query: ({ limit, offset, isActive, role }) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (offset) params.append('offset', offset.toString());
        params.append('isActive', isActive.toString());
        return {
          url: `/${role}/support-requests/?${params.toString()}`,
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
    getSupportRequestsMessage: builder.query<TSupportMessages, string>({
      query: (id) => {
        return {
          url: `/common/support-requests/${id}/messages`,
          method: 'GET',
        };
      },
      providesTags: ['SupportRequest'],
    }),
    markMessagesAsRead: builder.mutation({
      query: (id) => ({
        url: `/common/support-requests/${id}/messages/read`,
        method: 'POST',
        body: id,
      }),
      invalidatesTags: ['SupportRequest'],
    }),

    closeRequest: builder.mutation({
      query: (id) => ({
        url: `/manager/support-requests/${id}/close`,
        method: 'POST',
      }),
      invalidatesTags: ['SupportRequest'],
    }),
  }),
});

export const {
  useCreateSupportRequestMutation,
  useGetSupportRequestsQuery,
  useGetSupportRequestsMessageQuery,
  useSendSupportRequestMessageMutation,
  useMarkMessagesAsReadMutation,
  useCloseRequestMutation,
} = hotelsApi;
