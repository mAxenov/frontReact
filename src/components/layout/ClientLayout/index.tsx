import { Outlet } from 'react-router-dom';
import MainLayout from '../MainLayout';

function ClientLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default ClientLayout;
