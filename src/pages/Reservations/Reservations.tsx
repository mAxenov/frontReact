import styles from './reservations.module.css';
import {
  useCanselReservationMutation,
  useGetReservationsUserQuery,
} from 'src/API/reservationApi';
import ReservationCard from './ReservationCard/ReservationCard';
import { TReservation } from './ReservationCard/types';

function Reservations() {
  const { data, isLoading } = useGetReservationsUserQuery('');
  const [canselReservation] = useCanselReservationMutation();
  const handleCancelReservation = (id: string) => {
    console.log(id);
    canselReservation(id);
  };

  return (
    <div className={styles.reservations}>
      <h1 className={styles.head}>Мои бронирования</h1>
      {isLoading && <h1>Loading...</h1>}
      {data?.length === 0 && <h1>Нет бронирований</h1>}
      {data?.length > 0 &&
        data?.map((reservation: TReservation) => (
          <ReservationCard
            reservation={reservation}
            handleCancelReservation={handleCancelReservation}
          />
        ))}
    </div>
  );
}

export default Reservations;
