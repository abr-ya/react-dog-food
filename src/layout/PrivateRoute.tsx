import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { Loader } from '../components';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) return <Loader />;

  return loggedIn ? <Outlet /> : <Navigate to='/user' />;
};

export default PrivateRoute;
