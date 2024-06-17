import { useGetHotelsQuery } from 'src/API/hotelsApi';

import styles from './style.module.css';
import Box from 'src/components/UI/box/Box';
import H1 from 'src/components/UI/heading/H1/H1';

import { useState } from 'react';
import HotelCard from './hotelCard/HotelCard';
import Pagination from 'src/components/UI/Pagination/Pagination';
import usePagination from 'src/utils/hooks/usePagination';
import SimpleSearch from 'src/components/UI/SimpleSearch/SimpleSearch';

const ROWS_PER_PAGE = 10;

function AllHotels() {
  const [title, setTitle] = useState('');
  const [handleNextPageClick, handlePrevPageClick, { currentPage }] =
    usePagination(ROWS_PER_PAGE);

  const { data, isLoading, isFetching } = useGetHotelsQuery({
    title,
    limit: ROWS_PER_PAGE,
    offset: (currentPage - 1) * ROWS_PER_PAGE,
  });

  return (
    <>
      <div className={styles.wrapper}>
        <Box>
          <H1>Все гостиницы</H1>
          <SimpleSearch
            placeholder="Поиск гостиницы"
            name="Поиск"
            formHandler={setTitle}
          />
        </Box>
        {isLoading && <h1>Loading...</h1>}
        {data &&
          data.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
        {(ROWS_PER_PAGE <= (data?.length ?? 0) || currentPage > 1) && (
          <Pagination
            onNextPageClick={() => handleNextPageClick(data?.length ?? 0)}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: currentPage === 1 || isFetching,
              right: ROWS_PER_PAGE > (data?.length ?? 0) || isFetching,
            }}
          />
        )}
      </div>
    </>
  );
}

export default AllHotels;
