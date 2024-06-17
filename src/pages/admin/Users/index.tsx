import Box from 'src/components/UI/box/Box';
import styles from './index.module.css';
import { useGetUsersQuery } from 'src/API/usersApi';
import useAuth from 'src/utils/hooks/useAuth';
import MyButton from 'src/components/UI/button/MyButton';
import SimpleSearch from 'src/components/UI/SimpleSearch/SimpleSearch';
import { useEffect, useState } from 'react';
import Pagination from 'src/components/UI/Pagination/Pagination';
import usePagination from 'src/utils/hooks/usePagination';
import { useNavigate } from 'react-router-dom';
import MyTable from 'src/components/UI/MyTable/MyTable';
import { TUserWithId } from 'src/types/auth.type';

const ROWS_PER_PAGE = 10;
const rows = [
  {
    field: 'name',
    headerName: 'ФИО',
  },
  {
    field: 'contactPhone',
    headerName: 'Телефон',
  },
  {
    field: 'email',
    headerName: 'Email',
  },
];

function UsersPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [rowsTable, setRowsTable] = useState(rows);
  const [handleNextPageClick, handlePrevPageClick, { currentPage }] =
    usePagination(ROWS_PER_PAGE);

  const [searchParams, setSearchParams] = useState<string>();
  const { data, isLoading, isError, isFetching } = useGetUsersQuery({
    role: user?.role,
    searchParams,
    limit: ROWS_PER_PAGE,
    offset: (currentPage - 1) * ROWS_PER_PAGE,
  });

  const handleSearch = (value: string) => {
    setSearchParams(value);
  };

  const handleOnRegister = () => {
    navigate('/admin/users/registration');
  };

  const handleUserReservation = (user: TUserWithId) => {
    navigate('/manager/reservations/' + user.id, { state: { user } });
  };

  useEffect(() => {
    if (data?.length > 0 && !isError) {
      if (user?.role === 'manager') {
        const newUser = data?.map((item: TUserWithId) => ({
          ...item,
          reservationBtn: (
            <MyButton onClick={() => handleUserReservation(item)}>
              Список броней
            </MyButton>
          ),
        }));

        setUsers(newUser);
        setRowsTable([...rows, { field: 'reservationBtn', headerName: '' }]);
      }
    } else {
      setUsers(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, user?.role]);

  return (
    <Box className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.head}>Пользователи</h1>
        {user?.role === 'admin' && (
          <MyButton onClick={handleOnRegister} className={styles.button}>
            Создать пользователя
          </MyButton>
        )}
      </div>
      <div>
        <SimpleSearch
          placeholder="Введите имя пользователя, id, телефон или почту"
          name="Искать"
          formHandler={handleSearch}
        />
      </div>
      {/* {isError && <div>{error?.data?.message}</div>} */}
      {isLoading ? (
        <div>Загрузка...</div>
      ) : !isError && data.length > 0 && users ? (
        <>
          {/* <UserTable users={data} authRole={user?.role} /> */}
          <MyTable rows={rowsTable} colums={users} />
        </>
      ) : (
        <div>Пользователи не найдены</div>
      )}
      {(ROWS_PER_PAGE <= data?.length || currentPage > 1) && (
        <Pagination
          onNextPageClick={() => handleNextPageClick(data?.length)}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: currentPage === 1 || isFetching,
            right: ROWS_PER_PAGE > data?.length || isFetching,
          }}
        />
      )}
    </Box>
  );
}

export default UsersPage;
