import { HTMLAttributes } from 'react';
import styles from './H1.module.css';

export default function H1(
  props: HTMLAttributes<HTMLHeadingElement>
): JSX.Element {
  return (
    <h1
      {...props}
      className={`${styles.heading1} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </h1>
  );
}
