import styles from './loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}></div>
    </div>
  );
}

export default Loader;
