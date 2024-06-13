import MyButton from 'src/components/UI/button/MyButton';
import styles from './reservationCard.module.css';
import Box from 'src/components/UI/box/Box';
import { TReservation } from './types';
function ReservationCard({ reservation }: { reservation: TReservation }) {
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
          <MyButton>Отменить бронирование</MyButton>
        </div>
      </div>
    </Box>

    // <div className={styles.reservationCard}>
    //   <div className={styles.info}>
    //     <div className={styles.imagesContainer}>
    //       {reservation.hotelRoom.images.length > 0 &&
    //         reservation.hotelRoom.images.map((image, index) => {
    //           return (
    //             <div key={index} className={styles.image}>
    //               <img
    //                 src={import.meta.env.VITE_API_URL + image}
    //                 alt={`Изображение ${index}`}
    //               />
    //             </div>
    //           );
    //         })}
    //     </div>
    //     <div>
    //       Период проживания:{' '}
    //       {`${new Date(
    //         reservation.startDate
    //       ).toLocaleDateString()} - ${new Date(
    //         reservation.endDate
    //       ).toLocaleDateString()}`}
    //     </div>
    //     <div>{`Название отеля: ${reservation.hotel.title}`}</div>
    //     <div>{`Описание отеля: ${reservation.hotel.description}`}</div>
    //     <div>{`О номере: ${reservation.hotelRoom.description}`}</div>
    //     <div>
    //       <MyButton>Отменить бронирование</MyButton>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ReservationCard;
