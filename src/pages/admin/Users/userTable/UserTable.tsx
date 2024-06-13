import { TUser } from 'src/types/auth.type';
import styles from './userTable.module.css'; // Подключаем стили

type TProps = {
  users: TUser[];
};

const UserTable = ({ users }: TProps) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            <th className={styles.headItem}>ID</th>
            <th className={styles.headItem}>ФИО</th>
            <th className={styles.headItem}>Телефон</th>
            <th className={styles.headItem}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className={styles.row}>
              <td className={styles.rowItem}>{index + 1}</td>
              <td className={styles.rowItem}>{user.name}</td>
              <td className={styles.rowItem}>{user.contactPhone}</td>
              <td className={styles.rowItem}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
