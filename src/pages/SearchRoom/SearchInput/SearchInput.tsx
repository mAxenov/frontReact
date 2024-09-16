import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './searchInput.module.css';
import { THotel } from 'src/types/hotel';

function SearchInput({
  inputHandle,
  clickHandle,
  items,
  isLoading,
}: {
  inputHandle: (nameHotel: string) => void;
  clickHandle: (hotel: THotel | null) => void;
  items: THotel[] | undefined;
  isLoading: boolean;
}) {
  const [query, setQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (query) {
      timerRef.current = setTimeout(() => {
        inputHandle(query);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      inputHandle('');
      clickHandle(null);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSelect = (hotel: THotel) => {
    setQuery(hotel.title);
    clickHandle(hotel);
    setIsOpen(false);
  };

  return (
    <div className={styles.hotelSearch}>
      <input
        name="hotelName"
        type="text"
        className={styles.inputSearch}
        onChange={handleChange}
        value={query}
        onClick={() => setIsOpen(true)}
        placeholder="Введите название гостиницы (необязательно) "
      />
      {(items || isLoading) && isOpen && query.length > 0 ? (
        <ul className={styles.hotelList}>
          {isLoading ? (
            <li className={styles.hotelListItem}>Загрузка...</li>
          ) : items?.length === 0 ? (
            <li className={styles.hotelListItem}>Ничего не найдено</li>
          ) : (
            items?.map((item: THotel) => (
              <li
                className={styles.hotelListItem}
                key={item.id}
                onClick={() => {
                  setQuery(item.title);
                  handleSelect(item);
                }}
              >
                {item.title}
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}

export default SearchInput;
