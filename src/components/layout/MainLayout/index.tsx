import { ReactNode } from 'react';
import Wrapper from '../wrapper/Wrapper';
import Header from './header/Header';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default MainLayout;
