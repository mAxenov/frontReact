export type TGetSupportRequests = {
  limit?: number;
  offset?: number;
  isActive: boolean;
};

export type TMessage = {
  author: { id: string; name: string };
  sentAt: string;
  id: string;
  readAt: null | Date;
  text: string;
};

export type TSupportRequest = {
  id: string;
  createdAt: Date;
  hasNewMessages: boolean;
  isActive: boolean;
  lastMessage: TMessage;
  unreadCount: number;
};
