import { useState } from 'react';
import styles from './ticketTab.module.css';

type TicketTabProps = {
  onTab: (state: boolean) => void;
};

function TicketTab({ onTab }: TicketTabProps) {
  const [tabIsActive, setTabIsActive] = useState(false);

  const handleClickTab = (state: boolean) => {
    setTabIsActive(state);
    onTab(state);
  };
  return (
    <div className={styles.ticketListTabs}>
      <div
        className={`${styles.ticketListTab} ${
          !tabIsActive ? styles.tabIsActive : ''
        }`}
        onClick={() => handleClickTab(false)}
      >
        Открытые вопросы
      </div>
      <div
        className={`${styles.ticketListTab} ${
          tabIsActive ? styles.tabIsActive : ''
        }`}
        onClick={() => handleClickTab(true)}
      >
        Архив
      </div>
    </div>
  );
}

export default TicketTab;
