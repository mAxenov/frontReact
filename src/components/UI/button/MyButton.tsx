import { ButtonHTMLAttributes } from 'react';
import cl from './MyButton.module.css';

const MyButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classes = [cl.myButton];
  if (props.disabled) {
    classes.push(cl.disabled);
  }

  return (
    <button className={classes.join(' ')} {...props}>
      {props.children}
    </button>
  );
};

export default MyButton;
