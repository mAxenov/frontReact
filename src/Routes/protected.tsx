import { admin, client, manager, noRole } from 'src/assets/roles';
import AllHotels from 'src/pages/admin/AllHotels';
import CreateHotel from 'src/pages/admin/CreateHotel';
import Hotel from 'src/pages/admin/Hotel';
import Reservations from 'src/pages/Reservations/Reservations';
import SearchRoom from 'src/pages/SearchRoom';
import UsersPage from 'src/pages/admin/Users';
import AdminLayout from 'src/components/layout/AdminLayout';
import ClientLayout from 'src/components/layout/ClientLayout';
import HotelPage from 'src/pages/Hotel';
import UserRegistration from 'src/pages/admin/UserRegistration/UserRegistration';
import UserReservation from 'src/pages/admin/UserReservation/UserReservation';

const routes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'hotels/create',
        element: <CreateHotel />,
        roles: admin,
      },
      {
        path: 'hotels/all',
        element: <AllHotels />,
        roles: admin,
      },
      {
        path: 'hotels/:id',
        element: <Hotel />,
        roles: admin,
      },
    ],
  },
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        path: '/',
        element: <SearchRoom />,
        roles: noRole,
      },
      {
        path: 'hotel/details',
        element: <HotelPage />,
        roles: noRole,
      },
      {
        path: 'client/reservations',
        element: <Reservations />,
        roles: client,
      },
      {
        path: 'users',
        element: <UsersPage />,
        roles: manager,
      },
      {
        path: '/admin/users/registration',
        element: <UserRegistration />,
        roles: manager,
      },
      {
        path: '/manager/reservations/:id',
        element: <UserReservation />,
        roles: manager,
      },
      {
        path: '*',
        element: <div>404</div>,
        roles: noRole,
      },
    ],
  },
];

export default routes;
