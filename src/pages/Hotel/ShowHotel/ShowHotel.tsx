import { THotel } from 'src/types/hotel';
import styles from './showHotel.module.css';
import MyButton from 'src/components/UI/button/MyButton';

function ShowHotel({
  hotel,
  editHandler,
  roomHandler,
}: {
  hotel: THotel;
  editHandler: () => void;
  roomHandler?: () => void;
}) {
  return (
    <>
      <div className={styles.imagesContainer}>
        {hotel.images.length > 0 ? (
          hotel.images.map((image, index) => {
            return (
              <div key={index} className={styles.image}>
                <img
                  src={import.meta.env.VITE_API_URL + image}
                  alt={`Изображение ${index}`}
                />
              </div>
            );
          })
        ) : (
          <div className={styles.image}>Images</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{hotel.title}</div>
        <span className={styles.description}>
          <p>{hotel.description}</p>
        </span>
        <div className={styles.btnGroup}>
          <MyButton color="secondary" onClick={editHandler}>
            Редактировать
          </MyButton>
          <MyButton onClick={roomHandler}>Добавить номер</MyButton>
        </div>
      </div>
    </>
  );
}

export default ShowHotel;
