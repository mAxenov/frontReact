import Box from 'src/components/UI/box/Box';
import styles from './index.module.css';
import SearchHotelForm from './searchHotelForm/SearchHotelForm';
import { useGetHotelsQuery } from 'src/API/hotelsApi';
import { useState } from 'react';
import HotelCard from '../allHotels/hotelCard/HotelCard';

function SearchHotel() {
  const [title, setTitle] = useState('');
  const { data, isLoading } = useGetHotelsQuery(
    { title },
    { skip: title.length === 0 }
  );
  console.log(data);
  const searchHotel = (values) => {
    console.log(
      new Date(values.startDate).valueOf(),
      new Date(values.endDate).valueOf()
    );
    if (values.title) {
      setTitle(values.title);
    }
  };

  return (
    <>
      <Box>
        <h1 className={styles.head}>Поиск гостиницы</h1>
        <SearchHotelForm formHandler={searchHotel} />
      </Box>
      {isLoading && <h1>Loading...</h1>}
      {data?.length > 0 && data?.map((hotel) => <HotelCard hotel={hotel} />)}
    </>
  );
}

export default SearchHotel;
