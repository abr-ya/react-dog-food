import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'ghost';
}

export const Button = ({ variant, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.ghost]: variant === 'ghost',
      })}
      {...props}>
      {children}
    </button>
  );
};
