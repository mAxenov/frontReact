import { useState } from 'react';
import styles from './carousel.module.css';

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      {images.length > 1 && (
        <button className={styles.carouselButton} onClick={previousSlide}>
          &#10094;
        </button>
      )}

      <div className={styles.carouselSlide}>
        {images.map((image, index) => (
          <img
            key={index}
            src={import.meta.env.VITE_API_URL + image}
            alt={`Slide ${index}`}
            className={`${styles.carouselImage} ${
              index === currentIndex ? styles.active : ''
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className={styles.carouselButton} onClick={nextSlide}>
            &#10095;
          </button>

          <div className={styles.carouselIndicators}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.active : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
