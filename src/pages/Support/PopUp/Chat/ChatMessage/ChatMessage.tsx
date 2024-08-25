import { TMessage } from 'src/types/supportRequests.type';
import styles from './chatMessage.module.css';
import { formatDate } from 'src/utils/formatDate';
import { generateColorFromString } from 'src/utils/generateColorFromString';

function ChatMessage({ message }: { message: TMessage }) {
  return (
    <div className={styles.message}>
      <div className={styles.messageBody}>
        <div
          className={styles.messageLogo}
          style={{
            backgroundColor: generateColorFromString(message.author.id),
          }}
        >
          {message.author.name.slice(0, 1).toUpperCase()}
        </div>
        <div className={styles.messageContent}>
          <div className={styles.messageContentInfo}>
            <div className={styles.messageContentUsername}>
              {message.author.name}
            </div>
            <div className={styles.messageContentDate}>
              {formatDate(message.sentAt)}
            </div>
          </div>

          <div className={styles.messageContentText}>{message.text}</div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
