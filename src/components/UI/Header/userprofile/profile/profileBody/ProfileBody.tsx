import { useLogoutMutation } from 'src/API/authApi';
import MyButton from 'src/components/UI/button/MyButton';
import { TUser } from 'src/types/auth.type';
import styles from './ProfileBody.module.css';
import { Link } from 'react-router-dom';

type TProps = {
  user: TUser;
};

function ProfileBody({ user }: TProps) {
  const [logout] = useLogoutMutation();
  const onClickHandler = async () => {
    await logout({});
    //window.location.replace('/');
  };

  let content;
  switch (user.role) {
    case 'manager':
      content = (
        <div className={styles.point}>
          <Link to={'/users'} className={styles.pointButton}>
            <div className={styles.pointText}>Управление пользователями</div>
          </Link>
        </div>
      );
      break;
    case 'admin':
      content = (
        <>
          <div className={styles.point}>
            <Link to={'/users'} className={styles.pointButton}>
              <div className={styles.pointText}>Управление пользователями</div>
            </Link>
          </div>
          <div className={styles.point}>
            <Link to={'/admin/hotels/all'} className={styles.pointButton}>
              <div className={styles.pointText}>Управление гостиницами</div>
            </Link>
          </div>
        </>
      );
      break;

    case 'client':
      content = (
        <div className={styles.point}>
          <Link to={'/client/reservations'} className={styles.pointButton}>
            <div className={styles.pointText}>Мои бронирования</div>
          </Link>
        </div>
      );
      break;
  }

  return (
    <div className={styles.section}>
      <div className={styles.head}>Учетная запись</div>
      <div className={styles.point}>
        <div className={styles.pointText}>Имя пользователя:</div>
        <div className={styles.pointText}>{user.name}</div>
      </div>
      <div className={styles.point}>
        <div className={styles.pointText}>Почтовый адрес:</div>
        <div className={styles.pointText}>{user.email}</div>
      </div>
      <div className={styles.point}>
        <div className={styles.pointText}>Контактный телефон:</div>
        <div className={styles.pointText}>{user.contactPhone}</div>
      </div>
      <div className={styles.point}>
        <div className={styles.pointText}>Права доступа:</div>
        <div className={styles.pointText}>{user.role}</div>
      </div>
      {content && content}

      <MyButton onClick={onClickHandler}>Выйти</MyButton>
    </div>
  );
}
//onClick={myReservationHandler}
export default ProfileBody;
