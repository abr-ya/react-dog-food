import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { Loader } from '../components';
import { useState } from 'react';

const PrivateRoute = () => {
  // todo: понять, почему так много раз рендериться роут?!
  // оставляю консоль и комментарий, чтобы разобраться!
  console.log('PrivateRoute Render');
  const { loggedIn, checkingStatus } = useAuthStatus();
  const [first, setFirst] = useState(true);

  if (checkingStatus) return <Loader />;

  if (!loggedIn && first) {
    setFirst(false);
    toast.info('Пожалуйста, авторизуйтесь для доступа ко всем страницам сайта!');
  }

  return loggedIn ? <Outlet /> : <Navigate to='/user' />;
};

export default PrivateRoute;
