import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Btn, Container, H1ExtraBold } from '../components/Common.styled';
import { Loader, UserForm } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/typedRedux';
import { login, logout } from '../features/user/authSlice';
import { RootStateType } from '../app/store';

const User = () => {
  const { user, isLoading, isError, isSuccess, error } = useAppSelector((state: RootStateType) => state.auth);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    if (isError) toast.error(error);

    // Redirect when logged in
    // if (isSuccess) navigate('/');
  }, [isError, isSuccess]);

  const formHandler = async ({ email, password }: { email: string; password: string }) => {
    console.log('Login', { email, password });
    dispatch(login({ email, password }));
  };

  const Logout = () => {
    console.log('logout');
    dispatch(logout());
  };

  const renderMain = () => {
    if (isLoading) return <Loader />;

    if (isError)
      return (
        <>
          Произошла ошибка: {error}
          <Btn onClick={Logout}>Вернуться к форме</Btn>
        </>
      );

    if (user.data.name)
      return (
        <>
          Авторизован пользователь: {user.data.name}
          <Btn onClick={Logout}>Сбросить и вернуться к форме</Btn>
        </>
      );

    return (
      <>
        <UserForm formHandler={formHandler} buttonTitle='Login' />
      </>
    );
  };

  return (
    <Container>
      <H1ExtraBold>User Page</H1ExtraBold>
      {renderMain()}
    </Container>
  );
};

export default User;
