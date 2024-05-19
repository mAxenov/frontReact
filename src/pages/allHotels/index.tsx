import { useGetHotelsQuery } from 'src/API/hotelsApi';
import HotelCard from './hotelCard/HotelCard';
import styles from './style.module.css';
// import { useCallback, useState } from 'react';
// import Pagination from 'src/components/UI/Pagination/Pagination';
// const ROWS_PER_PAGE = 10;
// const getTotalPageCount = (rowCount: number): number =>
//   Math.ceil(rowCount / ROWS_PER_PAGE);
function AllHotels() {
  const { data, isLoading } = useGetHotelsQuery('');
  // const [page, setPage] = useState(1);
  // const handleNextPageClick = useCallback(() => {
  //   const current = page;
  //   const next = current + 1;
  //   const total = data ? getTotalPageCount(100) : current;

  //   setPage(next <= total ? next : current);
  // }, [page, data]);

  // const handlePrevPageClick = useCallback(() => {
  //   const current = page;
  //   const prev = current - 1;

  //   setPage(prev > 0 ? prev : current);
  // }, [page]);
  return (
    <>
      <div className={styles.wrapper}>
        {isLoading && <h1>Loading...</h1>}
        {data &&
          data.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
      </div>
      {/* <Pagination
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick}
        disable={{
          left: page === 1,
          right: page === getTotalPageCount(100),
        }}
        nav={{ current: page, total: getTotalPageCount(100) }}
      /> */}
    </>
  );
}

export default AllHotels;
