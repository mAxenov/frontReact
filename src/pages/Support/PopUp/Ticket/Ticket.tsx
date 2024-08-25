import { TSupportRequest } from 'src/types/supportRequests.type';
import styles from './ticket.module.css';
import { formatDate } from 'src/utils/formatDate';
import { generateColorFromString } from 'src/utils/generateColorFromString';

function Ticket({
  ticket,
  onClick,
}: {
  ticket: TSupportRequest;
  onClick: () => void;
}) {
  return (
    <div className={styles.ticket} onClick={onClick}>
      <div className={styles.ticketBody}>
        <div
          className={styles.ticketLogo}
          style={{
            backgroundColor: generateColorFromString(
              ticket.lastMessage.author.id
            ),
          }}
        >
          {ticket.lastMessage.author.name.slice(0, 1).toUpperCase()}
          {ticket.hasNewMessages && (
            <div className={styles.ticketNewMessage}>
              <span>{ticket.unreadCount}</span>
            </div>
          )}
        </div>
        <div className={styles.ticketContent}>
          <div className={styles.ticketContentDate}>
            {formatDate(ticket.lastMessage.sentAt)}
          </div>
          <div className={styles.ticketContentUsername}>
            {' '}
            {ticket.lastMessage.author.name + ':'}
          </div>
          <div className={styles.ticketContentText}>
            {ticket.lastMessage.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
