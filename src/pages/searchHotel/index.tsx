import SearchHotelForm from './searchHotelForm/searchHotelForm';
import styles from './index.module.css';

function SearchHotel() {
  return (
    <>
      <h1 className={styles.head}>Поиск гостиницы</h1>
      <SearchHotelForm />
    </>
  );
}

export default SearchHotel;
