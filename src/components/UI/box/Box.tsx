import styles from './box.module.css';

/**
 * A styled box component
 * @param props The properties of the component.
 * @returns The Box component.
 */
function Box(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      {...props}
      className={`${styles.box} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </div>
  );
}

export default Box;
