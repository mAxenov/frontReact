import MyButton from 'src/components/UI/button/MyButton';
import styles from './reservationCard.module.css';
import Box from 'src/components/UI/box/Box';
import { TReservation } from './types';
function ReservationCard({
  reservation,
  handleCancelReservation,
}: {
  reservation: TReservation;
  handleCancelReservation: (id: string) => void;
}) {
  return (
    <Box className={styles.reservationCard}>
      <div className={styles.imagesContainer}>
        <img
          src={import.meta.env.VITE_API_URL + reservation.hotelRoom.images[0]}
          alt={`Изображение ${reservation.hotelRoom.images[0]}`}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.hotelTitle}>{reservation.hotel.title}</div>
        <div className={styles.hotelRoom}>
          <div className={styles.roomTitle}>
            <div>{reservation.hotelRoom.title}</div>
            <div>
              Период проживания:{' '}
              {`${new Date(
                reservation.startDate
              ).toLocaleDateString()} - ${new Date(
                reservation.endDate
              ).toLocaleDateString()}`}
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <MyButton onClick={() => handleCancelReservation(reservation.id)}>
            Отменить бронирование
          </MyButton>
        </div>
      </div>
    </Box>
  );
}

export default ReservationCard;
