import Box from 'src/components/UI/box/Box';

import styles from './index.module.css';
import Menu from '../../UI/Menu/Menu';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/UI/Header/Header';

import Wrapper from 'src/components/layout/Wrapper/Wrapper';

function AdminLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Wrapper>
        <div className={styles.wrapper}>
          <Box style={{ flexBasis: '20%' }}>
            <Menu />
          </Box>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AdminLayout;
