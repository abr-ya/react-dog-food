import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './ReviewForm.module.css';
import { ReactComponent as CloseIcon } from './close.svg';
import cn from 'classnames';
import { Input, Rating, Textarea } from '../../atoms/index';
import { Btn } from '../../components/Common.styled';
import { IReviewForm } from './ReviewForm.interface';

interface IReviewFormComponent extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
}

const ReviewForm: FC<IReviewFormComponent> = ({ className, productId, ...props }) => {
  // todo использовать ли для вывода какого-то сообщения после запроса
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = async (formData: IReviewForm) => {
    console.log(formData, productId);

    // запрос
    // результат запроса:
    // setIsSuccess(true);
    // reset();
    // setError('Что-то пошло не так');
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          placeholder='Имя'
          error={errors.name}
        />
        <Input
          {...register('city', { required: { value: true, message: 'Укажите город' } })}
          placeholder='Город'
          className={styles.city}
          error={errors.city}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register('text', { required: { value: true, message: 'Заполните описание' } })}
          placeholder='Текст отзыва'
          className={styles.text}
          error={errors.text}
        />
        <div className={styles.submit}>
          <Btn>Отправить</Btn>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)}>
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon className={styles.close} onClick={() => setError(undefined)} />
        </div>
      )}
    </form>
  );
};

export default ReviewForm;
