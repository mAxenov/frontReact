import Box from 'src/components/UI/box/Box';
import styles from './index.module.css';
import UserTable from './userTable/UserTable';
import { useGetUsersQuery } from 'src/API/usersApi';
import useAuth from 'src/utils/hooks/useAuth';
import MyButton from 'src/components/UI/button/MyButton';

function UsersPage() {
  const { user } = useAuth();
  const { data, isLoading, error, isError } = useGetUsersQuery(user?.role);
  return (
    <Box>
      <div className={styles.header}>
        <h1 className={styles.head}>Пользователи</h1>
        {user?.role === 'admin' && (
          <MyButton className={styles.button}>Создать пользователя</MyButton>
        )}
      </div>
      <div></div>
      {isError && <div>{error?.data?.message}</div>}
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        !isError && <UserTable users={data} authRole={user?.role} />
      )}
    </Box>
  );
}

export default UsersPage;
