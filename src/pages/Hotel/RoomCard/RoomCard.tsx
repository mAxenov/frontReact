import { TRoom } from 'src/types/room';
import styles from './roomCard.module.css';
import Carousel from 'src/components/UI/Carousel/Carousel';
import MyButton from 'src/components/UI/button/MyButton';
import Box from 'src/components/UI/box/Box';

function RoomCard({
  room,
  handleNewReservation,
  reservationPermitted,
}: {
  room: TRoom;
  handleNewReservation: (id: string) => void;
  reservationPermitted: boolean;
}) {
  const handleClickRoom = () => {
    handleNewReservation(room._id);
  };
  return (
    <Box className={styles.roomCard}>
      <div className={styles.imagesContainer}>
        {room.images && <Carousel images={room.images} />}
      </div>
      <div className={styles.info}>
        <div className={styles.roomTitle}>{room.title}</div>
        <div className={styles.roomDescription}>{room.description}</div>
        <div className={styles.actions}>
          {reservationPermitted ? (
            <MyButton onClick={handleClickRoom}>Забронировать</MyButton>
          ) : (
            <div className={styles.reservationDenied}>
              Для бронирования авторизуйтесь
            </div>
          )}
        </div>
      </div>
    </Box>
  );
}

export default RoomCard;
