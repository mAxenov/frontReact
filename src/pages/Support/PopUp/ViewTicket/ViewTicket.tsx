import {
  useGetSupportRequestsMessageQuery,
  useMarkMessagesAsReadMutation,
  useSendSupportRequestMessageMutation,
} from 'src/API/supportSlice';
import Chat from '../Chat/Chat';
import Loader from 'src/components/UI/Loader/Loader';
import { useEffect, useState } from 'react';
import { useConnectSocket } from 'src/utils/hooks/useConnectSocket';
import { TMessage } from 'src/types/supportRequests.type';

function ViewTicket({ id }: { id: string }) {
  const [sendRequst] = useSendSupportRequestMessageMutation();
  const [markAsRead] = useMarkMessagesAsReadMutation();
  const { message } = useConnectSocket(id);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const { data, isLoading, isSuccess } = useGetSupportRequestsMessageQuery(id);

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  useEffect(() => {
    if (message) {
      setMessages((prev) => [...prev, message]);
      markAsRead(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const handlerSendRequst = (text: string) => {
    sendRequst({ body: { text }, id });
  };

  useEffect(() => {
    if (isSuccess) {
      markAsRead(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  if (isLoading) {
    return <Loader />;
  }
  return <Chat sendRequst={handlerSendRequst} messages={messages} />;
}

export default ViewTicket;
