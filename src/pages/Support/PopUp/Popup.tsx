import MyButton from 'src/components/UI/button/MyButton';
import styles from './popup.module.css';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import TicketTab from './TicketTab/TicketTab';
import { useGetSupportRequestsQuery } from 'src/API/supportSlice';
import { useState } from 'react';
import Ticket from './Ticket/Ticket';
import useSetParams from 'src/utils/hooks/useSetParams';
import { TParams } from '..';
import Loader from 'src/components/UI/Loader/Loader';
import NewTicket from './NewTicket/NewTicket';
import ViewTicket from './ViewTicket/ViewTicket';

type TPopUp = {
  onClose: () => void;
  params: TParams;
};

function Popup({ onClose, params }: TPopUp) {
  const [tabActive, setTabActive] = useState(false);
  const setParams = useSetParams();
  const handleOnTab = (state: boolean) => {
    setTabActive(state);
  };

  const { data, isLoading } = useGetSupportRequestsQuery({
    isActive: !tabActive,
  });

  const handleNewTicket = () => {
    setParams({ modal: 'support', type: 'new-ticket' });
  };

  const handleOnTicket = (id: string) => {
    setParams({ modal: 'support', type: 'ticket', uuid: id });
  };

  let Content;
  if (params && params.modal === 'support' && params.type === 'new-ticket') {
    Content = <NewTicket />;
  } else if (
    params &&
    params.modal === 'support' &&
    params.type === 'ticket' &&
    params.id
  ) {
    Content = <ViewTicket id={params.id} />;
  } else {
    Content = (
      <>
        <div className={styles.ticketControl}>
          <TicketTab onTab={handleOnTab} />
          <MyButton className={styles.popupButton} onClick={handleNewTicket}>
            Задать новый вопрос
          </MyButton>
        </div>
        <div className={styles.ticketList}>
          {data && data?.length > 0
            ? data.map((ticket) => (
                <Ticket
                  ticket={ticket}
                  key={ticket.id}
                  onClick={() => handleOnTicket(ticket.id)}
                />
              ))
            : 'Активных обращений в поддержку нет'}
        </div>
      </>
    );
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <div className={styles.popupHeader}>
          <span className={styles.popupHeaderTitle}>Поддержка</span>
          <CloseTwoToneIcon
            style={{ fontSize: '40px', cursor: 'pointer' }}
            onClick={onClose}
          />
        </div>

        {isLoading ? <Loader /> : Content}
      </div>
    </div>
  );
}

export default Popup;
