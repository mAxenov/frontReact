import MyButton from 'src/components/UI/button/MyButton';
import styles from './chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';
import { useEffect, useRef, useState } from 'react';
import { TMessage } from 'src/types/supportRequests.type';
import useAuth from 'src/utils/hooks/useAuth';

type TChat = {
  sendRequst: (text: string) => void;
  closeRequest: () => void;
  isActive: boolean;
  messages?: TMessage[] | null;
};

function Chat({ sendRequst, messages, closeRequest, isActive }: TChat) {
  const [onChange, setChange] = useState('');
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  // const [createRequset] = useCreateSupportRequestMutation();

  const handleRequest = () => {
    sendRequst(onChange);
    setChange('');
  };

  const handleClose = () => {
    closeRequest();
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current?.scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.chat}>
      <div className={styles.chatBody}>
        <div className={styles.chatMessages}>
          {messages &&
            messages.length > 0 &&
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {isActive && (
        <div className={styles.chatFooter}>
          <textarea
            className={styles.messageInput}
            placeholder="Текст сообщения..."
            onChange={(e) => setChange(e.target.value)}
            value={onChange}
          ></textarea>
          <div className={styles.buttons}>
            {user?.role === 'manager' && (
              <MyButton onClick={handleClose} color="orange">
                Закрыть обращение
              </MyButton>
            )}
            <MyButton onClick={handleRequest}>Отправить</MyButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
