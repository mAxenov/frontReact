import Box from 'src/components/UI/box/Box';
import styles from './index.module.css';
import UserTable from './userTable/UserTable';
import { useGetUsersQuery } from 'src/API/usersApi';

function UsersPage() {
  const { data, isLoading, error, isError } = useGetUsersQuery({});
  return (
    <Box>
      <h1 className={styles.head}>Пользователи</h1>
      <div></div>
      {error && <div>{error?.data?.message}</div>}
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        !isError && <UserTable users={data} />
      )}
    </Box>
  );
}

export default UsersPage;
