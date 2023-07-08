import { createContext, FC, ReactNode, useReducer } from 'react';
import { IUser } from '../interfaces';

const initialState: IUser = {
  data: {
    name: '',
    about: '',
    avatar: '',
    _id: '',
    email: '',
    group: '',
  },
  token: '',
};

// Reducer mb separate File!
// todo interface for reducer!
const userReducer = (state: IUser, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
};
// Reducer mb separate File!

type UserContextType = ReturnType<typeof UserManager>;

const initialContext = {
  ...initialState,
  setUser: () => false,
  resetUser: () => false,
};
const UserContext = createContext<UserContextType>(initialContext);

interface IUserManagerResult extends IUser {
  setUser: (user: IUser) => void;
  resetUser: () => void;
}

const UserManager = (): IUserManagerResult => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Set an User
  const setUser = (user: IUser) => {
    console.log('setUser,', user);
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  };

  const resetUser = () => {
    dispatch({ type: 'RESET_USER' });
  };

  return { ...state, setUser, resetUser };
};

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <UserContext.Provider value={UserManager()}>{children}</UserContext.Provider>
);

export default UserContext;
