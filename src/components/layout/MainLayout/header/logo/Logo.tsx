import styles from './logo.module.css';
import LogoSVG from './Logo-svg';

function Logo() {
  return (
    <div className={styles.logo}>
      <LogoSVG
        style={{ width: '2.5rem', height: '2.5rem', marginRight: '1rem' }}
      />
      <div>БРОНЬУЮТ</div>
    </div>
  );
}

export default Logo;
