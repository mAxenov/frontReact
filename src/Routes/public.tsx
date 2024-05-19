import { noRole } from 'src/assets/roles';
import ClientLayout from 'src/components/layout/ClientLayout';
import SearchHotel from 'src/pages/searchHotel';

const publicRoutes = {
  path: '/',
  element: <ClientLayout />,
  children: [
    {
      path: '/',
      element: <SearchHotel />,
      roles: noRole,
    },
  ],
};

export default publicRoutes;
