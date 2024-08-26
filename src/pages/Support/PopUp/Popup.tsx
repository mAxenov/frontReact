import MyButton from 'src/components/UI/button/MyButton';
import styles from './popup.module.css';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import TicketTab from './TicketTab/TicketTab';
import { useGetSupportRequestsQuery } from 'src/API/supportSlice';
import { useState } from 'react';
import Ticket from './Ticket/Ticket';
import useSetParams from 'src/utils/hooks/useSetParams';
import { TParams } from '..';
import Loader from 'src/components/UI/Loader/Loader';
import NewTicket from './NewTicket/NewTicket';
import ViewTicket from './ViewTicket/ViewTicket';
import useAuth from 'src/utils/hooks/useAuth';
import { useSearchParams } from 'react-router-dom';

type TPopUp = {
  onClose: () => void;
  params: TParams;
};

function Popup({ onClose, params }: TPopUp) {
  const [tabActive, setTabActive] = useState(false);
  const setParams = useSetParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();
  const handleOnTab = (state: boolean) => {
    setTabActive(state);
  };

  const { data, isLoading } = useGetSupportRequestsQuery({
    isActive: !tabActive,
    role: user?.role ? user?.role : 'client',
  });

  const handleNewTicket = () => {
    setParams({ modal: 'support', type: 'new-ticket' });
  };

  const handleOnTicket = (id: string) => {
    setParams({ modal: 'support', type: 'ticket', uuid: id });
  };

  const handleBack = () => {
    searchParams.delete('type');
    searchParams.delete('uuid');
    setSearchParams(searchParams);
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
          <div className={styles.popupHeaderContent}>
            {params && params.modal === 'support' && params.type && (
              <div className={styles.popupHeaderBack} onClick={handleBack}>
                <ArrowForwardOutlinedIcon />
              </div>
            )}
            <span className={styles.popupHeaderTitle}>Поддержка</span>
          </div>
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
