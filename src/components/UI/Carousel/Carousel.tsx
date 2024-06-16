import { useState, useEffect } from 'react';
import styles from './carousel.module.css';

const Carousel = ({
  images,
  perPage,
}: {
  images: string[];
  perPage?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(perPage || 1); // Количество изображений на странице

  const previousSlide = () => {
    const totalItems = images.length;
    const newIndex =
      currentIndex === 0
        ? totalItems - itemsPerPage
        : currentIndex - itemsPerPage;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

  const nextSlide = () => {
    const totalItems = images.length;
    const newIndex = currentIndex + itemsPerPage;
    setCurrentIndex(newIndex >= totalItems ? 0 : newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(perPage || 1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [perPage]);

  return (
    <div className={styles.carousel}>
      {images.length > itemsPerPage && (
        <button className={styles.carouselButton} onClick={previousSlide}>
          &#10094;
        </button>
      )}

      <div className={styles.carouselSlide}>
        {images
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((image, index) => (
            <div key={index} className={styles.image}>
              <img
                src={import.meta.env.VITE_API_URL + image}
                alt={`Slide ${index}`}
                className={`${styles.carouselImage} ${styles.active}`}
              />
            </div>
          ))}
      </div>

      {images.length > itemsPerPage && (
        <>
          <button className={styles.carouselButton} onClick={nextSlide}>
            &#10095;
          </button>
          <div className={styles.carouselIndicators}>
            {Array.from({
              length: Math.ceil(images.length / itemsPerPage),
            }).map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${
                  index === Math.floor(currentIndex / itemsPerPage)
                    ? styles.active
                    : ''
                }`}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
