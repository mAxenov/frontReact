import styles from './login.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FormLogin from './formLogin/FormLogin';
import { useState } from 'react';
import FormRegistration from './formRegistration/FormRegistration';
import useDropDown from 'src/utils/hooks/useDropDown';

function Login() {
  const [isOpenRegistration, setOpenRegistration] = useState(false);
  const [onOpen, ref, isOpen] = useDropDown();

  return (
    <div className={styles.loginWrapper} ref={ref}>
      <div className={styles.btnLogin} onClick={onOpen}>
        <span>Войти</span>
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {isOpen && (
        <div className={styles.loginForm}>
          <div className={styles.wrapperText}>
            <div onClick={() => setOpenRegistration(false)}>
              <span className={!isOpenRegistration ? styles.active : ''}>
                Войти
              </span>
            </div>
            <div>или</div>
            <div onClick={() => setOpenRegistration(true)}>
              <span className={isOpenRegistration ? styles.active : ''}>
                Зарегистрироваться
              </span>
            </div>
          </div>
          {!isOpenRegistration ? <FormLogin /> : <FormRegistration />}
        </div>
      )}
    </div>
  );
}

export default Login;
