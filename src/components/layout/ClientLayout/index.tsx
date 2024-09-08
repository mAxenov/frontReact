import { Outlet } from 'react-router-dom';
import Header from 'src/components/UI/Header/Header';
import Wrapper from '@components/layout/Wrapper/Wrapper';

function ClientLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default ClientLayout;
