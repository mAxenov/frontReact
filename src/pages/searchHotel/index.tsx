import Box from 'src/components/UI/box/Box';
import styles from './index.module.css';
import SearchHotelForm from './searchHotelForm/SearchHotelForm';

function SearchHotel() {
  return (
    <Box>
      <h1 className={styles.head}>Поиск гостиницы</h1>
      <SearchHotelForm />
    </Box>
  );
}

export default SearchHotel;
