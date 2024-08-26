import {
  useGetSupportRequestsMessageQuery,
  useMarkMessagesAsReadMutation,
  useSendSupportRequestMessageMutation,
} from 'src/API/supportSlice';
import Chat from '../Chat/Chat';
import Loader from 'src/components/UI/Loader/Loader';
import { useEffect } from 'react';

function ViewTicket({ id }: { id: string }) {
  const [sendRequst] = useSendSupportRequestMessageMutation();
  const [markAsRead] = useMarkMessagesAsReadMutation();
  const { data, isLoading, isSuccess } = useGetSupportRequestsMessageQuery(id);

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
  return <Chat sendRequst={handlerSendRequst} messages={data} />;
}

export default ViewTicket;
