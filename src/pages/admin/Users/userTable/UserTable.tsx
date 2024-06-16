import { TUser } from 'src/types/auth.type';
import styles from './userTable.module.css'; // Подключаем стили
import MyButton from 'src/components/UI/button/MyButton';

type TProps = {
  users: TUser[];
  authRole: string | undefined;
  // handleUserReservations: (userId: string) => void;
};

const UserTable = ({ users, authRole }: TProps) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            <th className={styles.headItem}>ID</th>
            <th className={styles.headItem}>ФИО</th>
            <th className={styles.headItem}>Телефон</th>
            <th className={styles.headItem}>Email</th>
            {authRole === 'manager' && <th className={styles.headItem}></th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className={styles.row}>
              <td className={styles.rowItem}>{index + 1}</td>
              <td className={styles.rowItem}>{user.name}</td>
              <td className={styles.rowItem}>{user.contactPhone}</td>
              <td className={styles.rowItem}>{user.email}</td>
              {authRole === 'manager' && (
                <td className={styles.rowItem}>
                  <MyButton className={styles.button}>Список броней</MyButton>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
