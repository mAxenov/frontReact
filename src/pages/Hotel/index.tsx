import styles from './index.module.css';
import Box from 'src/components/UI/box/Box';
import SearchRoomForm from '../SearchRoom/SearchRoomForm/SearchRoomForm';
import { useSearchRoomsQuery } from 'src/API/roomsApi';
import useSearchHotelParams from 'src/utils/hooks/useSearchHotelParams';
import H1 from 'src/components/UI/heading/H1/H1';
// import { THotelAndRooms } from '../SearchRoom/HotelCard/types';

// : { data?: THotelAndRooms[]; isFetching: boolean }

function HotelPage() {
  const { dateStart, dateEnd, hotel } = useSearchHotelParams();
  const { data, isFetching } = useSearchRoomsQuery(
    { dateStart, dateEnd, hotel },
    { skip: !dateEnd }
  );

  console.log('data', data);
  return (
    <div className={styles.hotelPage}>
      {isFetching && <h1>Loading...</h1>}
      {data?.length > 0 && (
        <>
          <Box className={styles.hotel}>
            <H1 className={styles.hotelTitle}>{data[0].hotelDetails.title}</H1>
          </Box>

          <Box>
            <SearchRoomForm />
          </Box>

          <Box className={styles.rooms}>
            <h3 className={styles.roomsTitle}>Доступные номера</h3>
          </Box>
        </>
      )}
    </div>
  );
}

export default HotelPage;
