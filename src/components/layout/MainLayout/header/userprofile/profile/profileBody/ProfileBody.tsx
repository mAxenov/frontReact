import { useLogoutMutation } from 'src/API/authApi';
import MyButton from 'src/components/UI/button/MyButton';
import { TUser } from 'src/types/auth.type';
import styles from './ProfileBody.module.css';

type TProps = {
  user: TUser;
};

function ProfileBody({ user }: TProps) {
  const [logout] = useLogoutMutation();

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
      <MyButton onClick={logout}>Выйти</MyButton>
    </div>
  );
}

export default ProfileBody;
