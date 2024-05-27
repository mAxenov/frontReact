import { admin, client, manager, noRole } from 'src/assets/roles';
import MainLayout from 'src/components/layout/MainLayout';
import Hotel from 'src/pages/Hotel';
import Reservations from 'src/pages/Reservations/Reservations';
import AllHotels from 'src/pages/allHotels';
import CreateHotel from 'src/pages/createHotel';
import SearchHotel from 'src/pages/searchHotel';
import UsersPage from 'src/pages/users';

const protectedRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'users',
      element: <UsersPage />,
      roles: manager,
    },
    {
      path: '/',
      element: <SearchHotel />,
      roles: noRole,
    },
    {
      path: 'admin/hotels/create',
      element: <CreateHotel />,
      roles: admin,
    },
    {
      path: 'admin/hotels/all',
      element: <AllHotels />,
      roles: admin,
    },
    {
      path: 'admin/hotels/:id',
      element: <Hotel />,
      roles: admin,
    },

    {
      path: 'client/reservations',
      element: <Reservations />,
      roles: client,
    },
  ],
};

export default protectedRoutes;
