function ImageBox({ image }) {
  return (
    <div key={index} className={styles.image}>
      <img src={image} alt={`Изображение ${index}`} className={styles.image} />
      <span
        onClick={() => {
          const newImages = [...values.images];
          newImages.splice(index, 1);
          setFieldValue('images', newImages);
          handleRemoveImage(index);
        }}
        className={styles.removeButton}
      >
        <ClearIcon style={{ color: 'inherit' }} />
      </span>
    </div>
  );
}

export default ImageBox;
