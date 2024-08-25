import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  useCanselReservationManagerMutation,
  useGetReservationsByUserIdQuery,
} from 'src/API/reservationApi';
import MyTable from 'src/components/UI/MyTable/MyTable';
import Box from 'src/components/UI/box/Box';
import MyButton from 'src/components/UI/button/MyButton';
import H1 from 'src/components/UI/heading/H1/H1';
import { TReservation } from 'src/types/reservation.type';
import styles from './UserReservation.module.css';

const rows = [
  {
    field: 'hotel',
    headerName: 'Отель',
  },
  {
    field: 'room',
    headerName: 'Номер',
  },
  {
    field: 'startDate',
    headerName: 'Дата заезда',
  },
  {
    field: 'endDate',
    headerName: 'Дата выезда',
  },
  {
    field: 'btn',
    headerName: '',
  },
];

function UserReservation() {
  const { id } = useParams();
  const { state } = useLocation();

  const [reservation, setReservation] = useState(null);

  const { data, isLoading, isError, isFetching } =
    useGetReservationsByUserIdQuery(id);

  const [cancelReservationMutation] = useCanselReservationManagerMutation();
  const cancelReservation = (id: string) => {
    cancelReservationMutation(id);
  };

  useEffect(() => {
    if (data && data.length > 0 && !isError && !isLoading && !isFetching) {
      const newData = data.map((item: TReservation) => ({
        hotel: item.hotel.title,
        room: item.hotelRoom.title,
        startDate: new Date(item.startDate).toLocaleDateString(),
        endDate: new Date(item.endDate).toLocaleDateString(),
        btn: (
          <MyButton
            onClick={() => cancelReservation(item.id)}
            className={styles.buttonCancel}
          >
            Отменить бронирование
          </MyButton>
        ),
      }));
      setReservation(newData);
    } else {
      setReservation(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isLoading, isFetching]);

  return (
    <Box>
      <H1>{state.user.name}</H1>
      {!reservation && <h2>У пользователя нет бронирований</h2>}
      {reservation && <MyTable rows={rows} colums={reservation} />}
    </Box>
  );
}

export default UserReservation;
