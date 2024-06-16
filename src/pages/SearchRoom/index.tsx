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
import Pagination from 'src/components/UI/Pagination/Pagination';
import usePagination from 'src/utils/hooks/usePagination';

const ROWS_PER_PAGE = 10;

function SearchRoom() {
  const [hotelId, setHotelId] = useState('');
  const [title, setTitle] = useState('');

  const { dateStart, dateEnd } = useSearchHotelParams();

  const { data: hotels, isFetching } = useGetHotelsQuery(
    { title },
    { skip: title.length === 0 }
  );

  const [handleNextPageClick, handlePrevPageClick, { currentPage }] =
    usePagination(ROWS_PER_PAGE);

  const {
    data,
    isFetching: isFetchingRooms,
    isLoading,
  } = useSearchRoomsQuery(
    {
      dateStart,
      dateEnd,
      hotel: hotelId,
      limit: ROWS_PER_PAGE,
      offset: (currentPage - 1) * ROWS_PER_PAGE,
    },
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
      {(ROWS_PER_PAGE <= data?.length || currentPage > 1) && (
        <Pagination
          onNextPageClick={() => handleNextPageClick(data?.length)}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: currentPage === 1 || isFetchingRooms,
            right: ROWS_PER_PAGE > data?.length || isFetchingRooms,
          }}
        />
      )}
    </div>
  );
}

export default SearchRoom;
