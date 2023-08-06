import { DetailedHTMLProps, InputHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import cn from "classnames";
import styles from "./Input.module.css";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldError;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
