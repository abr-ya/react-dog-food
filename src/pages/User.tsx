import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { Btn, Container, H1ExtraBold } from '../components/Common.styled';
import { UserForm } from '../components'; // Loader
import UserContext from '../context/UserContext';
// import { useAppDispatch, useAppSelector } from 'features/typedRedux';
// import { login, logout } from 'features/auth/authSlice';
import { LoginReguest } from '../services/api';

const User = () => {
  // const { user, isLoading, isError, isSuccess, error } = useAppSelector((state) => state.auth);
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const { data: user, setUser, resetUser } = useContext(UserContext);

  // useEffect(() => {
  //   if (isError) toast.error(error);

  //   // Redirect when logged in
  //   if (isSuccess) navigate('/');
  // }, [isError, isSuccess]);

  const formHandler = async ({ email, password }: { email: string; password: string }) => {
    console.log('Login', { email, password });
    // dispatch(login({ email, password }));
    LoginReguest(email, password)
      .then((res) => {
        console.log('login', res.data);
        setUser(res.data);
      })
      .catch((e) => {
        console.log('Error: ', e.message);
      });
  };

  const Logout = () => {
    console.log('logout');
    resetUser();
    // dispatch(logout());
  };

  const renderMain = () => {
    // if (isLoading) return <Loader />;

    // if (isError)
    //   return (
    //     <>
    //       Произошла ошибка: {error}
    //       <Btn onClick={Logout}>Вернуться к форме</Btn>
    //     </>
    //   );

    if (user.name)
      return (
        <>
          Авторизован пользователь: {user.name}
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
