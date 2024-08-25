import {
  useGetSupportRequestsMessageQuery,
  useSendSupportRequestMessageMutation,
} from 'src/API/supportSlice';
import Chat from '../Chat/Chat';
import Loader from 'src/components/UI/Loader/Loader';

function ViewTicket({ id }: { id: string }) {
  const [sendRequst] = useSendSupportRequestMessageMutation();
  const { data, isLoading } = useGetSupportRequestsMessageQuery(id);
  const handlerSendRequst = (text: string) => {
    sendRequst({ body: { text }, id });
  };

  if (isLoading) {
    return <Loader />;
  }
  return <Chat sendRequst={handlerSendRequst} messages={data} />;
}

export default ViewTicket;
