import Box from 'src/components/UI/box/Box';
import styles from './reservations.module.css';
import { useGetReservationsUserQuery } from 'src/API/reservationApi';
import ReservationCard, {
  TReservation,
} from './ReservationCard/ReservationCard';

function Reservations() {
  const { data, isLoading } = useGetReservationsUserQuery('');
  return (
    <Box>
      <h1 className={styles.head}>Мои бронирования</h1>
      {isLoading && <h1>Loading...</h1>}
      {data?.length === 0 && <h1>Нет бронирований</h1>}
      {data?.length > 0 &&
        data?.map((reservation: TReservation) => (
          <ReservationCard reservation={reservation} />
        ))}
    </Box>
  );
}

export default Reservations;
