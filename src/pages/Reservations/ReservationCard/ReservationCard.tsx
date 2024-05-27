export type TReservation = {
  id: string;
  startDate: string;
  endDate: string;
  hotelRoom: {
    description: string;
    images: string[];
  };
  hotel: {
    title: string;
    description: string;
  };
};

import MyButton from 'src/components/UI/button/MyButton';
import styles from './reservationCard.module.css';
function ReservationCard({ reservation }: { reservation: TReservation }) {
  return (
    <div className={styles.reservationCard}>
      <div className={styles.info}>
        <div className={styles.imagesContainer}>
          {reservation.hotelRoom.images.length > 0 &&
            reservation.hotelRoom.images.map((image, index) => {
              return (
                <div key={index} className={styles.image}>
                  <img
                    src={import.meta.env.VITE_API_URL + image}
                    alt={`Изображение ${index}`}
                  />
                </div>
              );
            })}
        </div>
        <div>
          Период проживания:{' '}
          {`${new Date(
            reservation.startDate
          ).toLocaleDateString()} - ${new Date(
            reservation.endDate
          ).toLocaleDateString()}`}
        </div>
        <div>{`Название отеля: ${reservation.hotel.title}`}</div>
        <div>{`Описание отеля: ${reservation.hotel.description}`}</div>
        <div>{`О номере: ${reservation.hotelRoom.description}`}</div>
        <div>
          <MyButton>Отменить бронирование</MyButton>
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
