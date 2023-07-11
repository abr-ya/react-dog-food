import { DetailedHTMLProps, HTMLAttributes, useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import cn from 'classnames';
import { ReactComponent as StarIcon } from './star.svg';
import styles from './Rating.module.css';
import { FieldError } from 'react-hook-form';

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  error?: FieldError;
}

// eslint-disable-next-line react/display-name
export const Rating = forwardRef(
  (
    { isEditable = false, error, rating, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      constructRating(rating);
      // toDo constructRating ? memo ?
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const changeDispay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code != 'Space' || !setRating) {
        return;
      }
      setRating(i);
    };

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          // to use hover on star-margin
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          <span
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDispay(i + 1)}
            onMouseLeave={() => changeDispay(rating)}
            onClick={() => onClick(i + 1)}
            key={i}>
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
            />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, {
          [styles.error]: error,
        })}>
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
