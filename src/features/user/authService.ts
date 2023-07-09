import { LoginReguest } from '../../api';
import { ILoginUser, INewUser } from './interfaces';

// Register user
export const registerRequest = async (userData: INewUser) => {
  const { data, status } = await LoginReguest(userData); // todo right request!!
  if (data) localStorage.setItem('user', JSON.stringify(data));

  return { data, status };
};

// Login user
export const loginRequest = async (userData: ILoginUser) => {
  const { data, status } = await LoginReguest(userData);
  if (data) localStorage.setItem('user', JSON.stringify(data));

  return { data, status };
};
