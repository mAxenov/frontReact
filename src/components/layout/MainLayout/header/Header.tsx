import Wrapper from '../../wrapper/Wrapper';
import styles from './header.module.css';
import Logo from './logo/Logo';
import UserProfile from './userprofile/UserProfile';

function Header() {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.header_wrapper}>
          <Logo />
          <UserProfile />
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
