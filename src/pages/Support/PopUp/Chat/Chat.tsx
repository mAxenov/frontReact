import MyButton from 'src/components/UI/button/MyButton';
import styles from './chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';
import { useState } from 'react';
import { TMessage } from 'src/types/supportRequests.type';

type TChat = {
  sendRequst: (text: string) => void;
  messages?: TMessage[] | null;
};

function Chat({ sendRequst, messages }: TChat) {
  const [onChange, setChange] = useState('');
  // const [createRequset] = useCreateSupportRequestMutation();

  const handleRequest = () => {
    sendRequst(onChange);
    setChange('');
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chatBody}>
        <div className={styles.chatMessages}>
          {messages &&
            messages.length > 0 &&
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
        </div>
      </div>
      <div className={styles.chatFooter}>
        <textarea
          className={styles.messageInput}
          placeholder="Текст сообщения..."
          onChange={(e) => setChange(e.target.value)}
          value={onChange}
        ></textarea>
        <MyButton onClick={handleRequest}>Отправить</MyButton>
      </div>
    </div>
  );
}

export default Chat;
