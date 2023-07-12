import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { saveToken } from '../api/';
import { userApi } from '../api/apiQuery';
import { IUserLoginPayload } from '../api/contracts';
import { Btn, BtnGhost, H1ExtraBold } from '../components/Common.styled';
import { ButtonBlock, InputBlock, StyledLabel, StyledInput } from '../components/Form.styled';
import { useAppDispatch, useAppSelector } from '../hooks/typedRedux';
import { userLogin, userLogout } from '../features/user/authSlice';

interface IFormData {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email('Некорректный Email').required('Email - обязательное поле'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(6, 'Минимальная длина пароля - 6 символов')
    .max(24, 'Максимальная длина пароля - 24 символа'),
});

const defaultValues = {
  email: '',
  password: '',
};

const User = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginUser, { data, isLoading, isSuccess }] = userApi.useLoginMutation();

  const onLogin = useCallback((user: IUserLoginPayload) => loginUser(user), [loginUser]);

  const form = useForm<IFormData>({ defaultValues, resolver: yupResolver(schema) });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: IFormData) => {
    onLogin(data);
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(userLogin(data));
      saveToken(data.token);
      navigate('/search');
    }
  }, [isSuccess, navigate, data, dispatch]);

  const Logout = () => {
    dispatch(userLogout());
  };

  if (user?.data?.name)
    return (
      <>
        Авторизован пользователь: {user.data.name}
        <Btn onClick={Logout}>Выйти</Btn>
      </>
    );

  return (
    <ApiProvider api={userApi}>
      <H1ExtraBold>Вход</H1ExtraBold>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputBlock>
          <StyledLabel htmlFor='email'>Email</StyledLabel>
          <StyledInput type='email' id='email' {...register('email')} />
          <p className='error'>{errors.email?.message}</p>
        </InputBlock>

        <InputBlock>
          <StyledLabel htmlFor='password'>Пароль</StyledLabel>
          <StyledInput type='password' id='password' {...register('password')} />
          <p className='error'>{errors.password?.message}</p>
        </InputBlock>

        <ButtonBlock>
          <Btn disabled={isLoading}>Войти</Btn>
          <BtnGhost onClick={() => navigate('/user/new')}>Регистрация</BtnGhost>
        </ButtonBlock>
      </form>
    </ApiProvider>
  );
};

export default User;
