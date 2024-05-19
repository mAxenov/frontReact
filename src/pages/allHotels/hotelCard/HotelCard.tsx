import MyButton from 'src/components/UI/button/MyButton';
import styles from './hotelCard.module.css';
import Box from 'src/components/UI/box/Box';
import { THotel } from 'src/types/hotel';
import { useNavigate } from 'react-router-dom';

function HotelCard({ hotel }: { hotel: THotel }) {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(`/admin/hotels/${hotel.id}`, { state: { hotel } });
  };
  return (
    <Box className={styles.hotelCard}>
      <div className={styles.image}>
        {hotel.images.length > 0 ? (
          <img src={import.meta.env.VITE_API_URL + hotel.images[0]} />
        ) : (
          'Images'
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{hotel.title}</div>
        <span className={styles.description}>
          <p>{hotel.description}</p>
        </span>
        <MyButton onClick={buttonHandler}>Подробнее</MyButton>
      </div>
    </Box>
  );
}

export default HotelCard;
