import { useState, useEffect, useContext } from 'react';
// import { useAppSelector } from 'features/typedRedux';
import UserContext from '../context/UserContext';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  // const { user } = useAppSelector((state) => state.auth);
  const { data: user } = useContext(UserContext);

  useEffect(() => {
    if (user.name) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setCheckingStatus(false);
  }, [user]);

  return { loggedIn, checkingStatus };
};
