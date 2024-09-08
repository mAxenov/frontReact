export type TGetSupportRequests = {
  limit?: number;
  offset?: number;
  isActive: boolean;
  role: string;
};

export type TMessage = {
  author: { id: string; name: string };
  sentAt: string;
  id: string;
  readAt: null | Date;
  text: string;
};

export type TSupportMessages = {
  id: string;
  isActive: boolean;
  messages: TMessage[];
}

export type TSupportRequest = {
  id: string;
  createdAt: Date;
  hasNewMessages: boolean;
  isActive: boolean;
  lastMessage: TMessage;
  unreadCount: number;
  client?: TClient | null;
};

export type TClient = {
  id: string;
  name: string;
  contactPhone: string;
  email: string;
};
