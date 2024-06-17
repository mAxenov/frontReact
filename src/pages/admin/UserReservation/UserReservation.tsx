import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetReservationsByUserIdQuery } from 'src/API/reservationApi';
import MyTable from 'src/components/UI/MyTable/MyTable';
import Box from 'src/components/UI/box/Box';
import H1 from 'src/components/UI/heading/H1/H1';
import { TReservation } from 'src/types/reservation.type';

const rows = [
  {
    field: 'hotel',
    headerName: 'Отель',
  },
  {
    field: 'startDate',
    headerName: 'Дата заезда',
  },
  {
    field: 'endDate',
    headerName: 'Дата выезда',
  },
];

function UserReservation() {
  const { id } = useParams();
  const { state } = useLocation();

  const [reservation, setReservation] = useState(null);

  const { data, isLoading, isError, isFetching } =
    useGetReservationsByUserIdQuery(id);

  useEffect(() => {
    if (data && data.length > 0 && !isError && !isLoading && !isFetching) {
      const newData = data.map((item: TReservation) => ({
        hotel: item.hotel.title,
        startDate: new Date(item.startDate).toLocaleDateString(),
        endDate: new Date(item.endDate).toLocaleDateString(),
      }));
      console.log(newData);
      setReservation(newData);
    }
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
