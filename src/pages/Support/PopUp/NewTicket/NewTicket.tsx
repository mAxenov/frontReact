import { useCreateSupportRequestMutation } from 'src/API/supportSlice';
import Chat from '../Chat/Chat';
import useSetParams from 'src/utils/hooks/useSetParams';

function NewTicket() {
  const [createTicker] = useCreateSupportRequestMutation();
  const setParams = useSetParams();

  const handleNewTicket = (text: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTicker({ text }).then((data: any) => {
      setParams({ modal: 'support', type: 'ticket', uuid: data.data.id });
    });
  };

  return <Chat sendRequst={handleNewTicket} />;
}

export default NewTicket;
