import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import Logo from './logo/Logo';
import UserProfile from './userprofile/UserProfile';
import Wrapper from 'src/components/layout/Wrapper/Wrapper';

function Header() {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.header_wrapper}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </NavLink>
          <UserProfile />
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
