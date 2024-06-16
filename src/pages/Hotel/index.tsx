import styles from './index.module.css';
import Box from 'src/components/UI/box/Box';
import SearchRoomForm from '../SearchRoom/SearchRoomForm/SearchRoomForm';
import { useSearchRoomsQuery } from 'src/API/roomsApi';
import useSearchHotelParams from 'src/utils/hooks/useSearchHotelParams';
import H1 from 'src/components/UI/heading/H1/H1';
import RoomCard from './RoomCard/RoomCard';
import { TRoom } from 'src/types/room';
import Carousel from 'src/components/UI/Carousel/Carousel';
import useIsRole from 'src/utils/hooks/useIsRole';
import { useCreateReservationMutation } from 'src/API/reservationApi';
import { useNavigate } from 'react-router-dom';

function HotelPage() {
  const isRole = useIsRole(['client']);
  const navigate = useNavigate();
  const { dateStart, dateEnd, hotel } = useSearchHotelParams();
  const { data, isFetching } = useSearchRoomsQuery(
    { dateStart, dateEnd, hotel, limit: 1 },
    { skip: !dateEnd }
  );

  const [createReservation] = useCreateReservationMutation();

  const handleNewReservation = (id: string) => {
    createReservation({
      hotelRoom: id,
      startDate: dateStart,
      endDate: dateEnd,
    }).then(() => {
      navigate('/client/reservations');
    });
  };

  return (
    <div className={styles.hotelPage}>
      {isFetching && <h1>Loading...</h1>}
      {data?.length > 0 && (
        <>
          <Box className={styles.hotel}>
            <H1 className={styles.hotelTitle}>{data[0].hotelDetails.title}</H1>
            <div className={styles.hotelImages}>
              <Carousel images={data[0].hotelDetails.images} perPage={3} />
            </div>
          </Box>

          <Box>
            <h3 className={styles.roomsTitle}>Доступные номера</h3>
            <SearchRoomForm />
          </Box>

          <div className={styles.rooms}>
            <div className={styles.roomsList}>
              {data[0].rooms.map((room: TRoom) => (
                <div className={styles.roomCard} key={room._id}>
                  <RoomCard
                    room={room}
                    reservationPermitted={isRole}
                    handleNewReservation={handleNewReservation}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HotelPage;
