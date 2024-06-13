import Box from 'src/components/UI/box/Box';
import Wrapper from '../Wrapper/Wrapper';
import Header from './header/Header';
import styles from './index.module.css';
import Menu from '../../UI/Menu/Menu';
import { Outlet } from 'react-router-dom';

function MainLayout(): JSX.Element {
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

export default MainLayout;
