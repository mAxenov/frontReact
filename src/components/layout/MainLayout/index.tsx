import Box from 'src/components/UI/box/Box';
import Wrapper from '../wrapper/Wrapper';
import Header from './header/Header';
import styles from './index.module.css';
import Menu from './menu/Menu';
import { Outlet } from 'react-router-dom';

function MainLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Wrapper>
        {
          <div className={styles.wrapper}>
            <Box style={{ flexBasis: '20%' }}>
              <Menu />
            </Box>
            <div className={styles.content}>
              <Outlet />
            </div>
          </div>
        }
      </Wrapper>
    </>
  );
}

export default MainLayout;
