import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './register.css';

interface IFormData {
  email: string;
  group: string;
  password: string;
  password2: string;
}

const schema = yup.object({
  email: yup.string().email('Некорректный Email').required('Email - обязательное поле'),
  group: yup.string().required('Группа - обязательное поле'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(6, 'Минимальная длина пароля - 6 символов')
    .max(24, 'Максимальная длина пароля - 24 символа')
    .oneOf([yup.ref('password')], 'Пароль и подтверждение не совпадают'),
  password2: yup
    .string()
    .required('Введите пароль')
    .oneOf([yup.ref('password')], 'Пароль и подтверждение не совпадают'),
});

const defaultValues = {
  group: '',
  email: '',
  password: '',
  password2: '',
};

const Register = () => {
  const form = useForm<IFormData>({ defaultValues, resolver: yupResolver(schema) });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Регистрация нового пользователя</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' id='email' {...register('email')} />
          <p className='error'>{errors.email?.message}</p>
        </div>

        <div className='form-control'>
          <label htmlFor='group'>Группа</label>
          <input type='text' id='group' {...register('group')} />
          <p className='error'>{errors.group?.message}</p>
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Пароль</label>
          <input type='password' id='password' {...register('password')} />
          <p className='error'>{errors.password?.message}</p>
        </div>

        <div className='form-control'>
          <label htmlFor='password2'>Подтверждение пароля</label>
          <input type='password' id='password2' {...register('password2')} />
          <p className='error'>{errors.password2?.message}</p>
        </div>

        <button>Зарегистрировать</button>
      </form>
    </div>
  );
};

export default Register;
