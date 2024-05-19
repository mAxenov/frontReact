import MainLayout from '../MainLayout';
import styles from './index.module.css';
import { Outlet } from 'react-router-dom';
import Menu from '../MainLayout/menu/Menu';
import Box from 'src/components/UI/box/Box';

function AdminLayout() {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Box style={{ flexBasis: '20%' }}>
          <Menu />
        </Box>
        <Box style={{ flexBasis: '80%' }}>
          <Outlet />
        </Box>
      </div>
    </MainLayout>
  );
}

export default AdminLayout;
