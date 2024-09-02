import { useEffect, useState } from 'react';
import SocketApi from 'src/API/socket-api';
import { TMessage } from 'src/types/supportRequests.type';

export const useConnectSocket = (id: string) => {
  const { socket } = SocketApi;
  const [message, setMessage] = useState<TMessage | null>(null);

  useEffect(() => {
    if (!socket) {
      SocketApi.createConnection();
    }

    if (socket) {
      const handleSubscribeToChat = (data: TMessage) => {
        setMessage(data);
      };

      socket.on('subscribeToChat', handleSubscribeToChat);
      socket.emit('subscribeToChat', id);

      return () => {
        if (socket) {
          socket.off('subscribeToChat', handleSubscribeToChat);
        }
      };
    }
  }, [id, socket]);

  return { message };
};
