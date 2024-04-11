import styles from './wrapper.module.css';
import { ReactNode } from 'react';

function Wrapper({ children }: { children: ReactNode }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
