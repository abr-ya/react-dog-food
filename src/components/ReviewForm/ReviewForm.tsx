import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input, Rating, Textarea } from "../../atoms/index";
import { Btn } from "../../components/Common.styled";
import { IReviewFormData } from "./interfaces";

interface IReviewForm extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onFormSubmit: (data: IReviewFormData) => void;
}

const ReviewForm: FC<IReviewForm> = ({ className, onFormSubmit, ...props }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewFormData>();

  return (
    <form onSubmit={handleSubmit((data) => onFormSubmit(data))}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", { required: { value: true, message: "Заполните имя" } })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register("city", { required: { value: true, message: "Укажите город" } })}
          placeholder="Город"
          className={styles.city}
          error={errors.city}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
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
          {...register("text", { required: { value: true, message: "Пожалуйста, напишите отзыв!" } })}
          placeholder="Текст отзыва"
          className={styles.text}
          error={errors.text}
        />
        <div className={styles.submit}>
          <Btn>Отправить</Btn>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
