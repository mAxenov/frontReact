import React, { ButtonHTMLAttributes } from 'react';
import cl from './MyButton.module.css';

const colorButton = {
  success: '#1AA053',
  error: '#E15D5D',
  primary: '#5d73e1',
  secondary: '#e1855d',
};

interface IMyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof colorButton;
}

const MyButton = React.memo<IMyButtonProps>(
  ({ color = 'primary', children, ...rest }) => {
    const classes = [cl.myButton, rest.disabled && cl.disabled]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        style={{ backgroundColor: colorButton[color] }}
        className={classes}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default MyButton;
