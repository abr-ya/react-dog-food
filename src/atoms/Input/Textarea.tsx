import { ForwardedRef, forwardRef, DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import cn from 'classnames';
import { FieldError } from 'react-hook-form';
import styles from './Input.module.css';

interface ITextarea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldError;
}

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(
  ({ error, className, ...props }: ITextarea, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <textarea
          ref={ref}
          className={cn(styles.input, styles.w100, styles.h100, {
            [styles.error]: error,
          })}
          {...props}
        />
        {error && (
          <span role='alert' className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
