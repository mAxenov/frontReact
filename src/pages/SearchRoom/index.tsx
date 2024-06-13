import Box from 'src/components/UI/box/Box';
import styles from './index.module.css';
import { useState } from 'react';
import H1 from 'src/components/UI/heading/H1/H1';
import SearchRoomForm from './SearchRoomForm/SearchRoomForm';

import SearchInput from './SearchInput/SearchInput';
import { useGetHotelsQuery } from 'src/API/hotelsApi';
import { THotel } from 'src/types/hotel';
import { useSearchRoomsQuery } from 'src/API/roomsApi';
import Hotels from './Hotels/Hotels';
import useSearchHotelParams from 'src/utils/hooks/useSearchHotelParams';

function SearchRoom() {
  const [hotelId, setHotelId] = useState('');
  const [title, setTitle] = useState('');
  const { dateStart, dateEnd } = useSearchHotelParams();

  const { data: hotels, isFetching } = useGetHotelsQuery(
    { title },
    { skip: title.length === 0 }
  );

  const { data, isLoading } = useSearchRoomsQuery(
    { dateStart, dateEnd, hotel: hotelId },
    { skip: !dateEnd }
  );

  const searchInputSelect = (hotel: THotel | null) => {
    if (hotel) {
      setHotelId(hotel.id);
    } else {
      setHotelId('');
    }
  };

  const searchInputChangeHandle = (nameHotel: string) => {
    setTitle(nameHotel);
  };

  return (
    <div className={styles.searchWrapper}>
      <Box>
        <H1>Поиск гостиницы</H1>
        <div className={styles.search}>
          <SearchInput
            clickHandle={searchInputSelect}
            inputHandle={searchInputChangeHandle}
            items={hotels}
            isLoading={isFetching}
          />
          <SearchRoomForm />
        </div>
      </Box>
      {isLoading && <h1>Loading...</h1>}
      {data?.length > 0 && <Hotels data={data} />}
    </div>
  );
}

export default SearchRoom;
