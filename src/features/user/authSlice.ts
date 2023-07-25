import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { isError } from '../utils';
import { IUser } from '../../api/contracts';
import { ILoginUser, INewUser } from './interfaces';
import { loginRequest, registerRequest } from './authService';
import { typedCatchHandler } from '../../lib/rtkHelper';

interface IUserState {
  user: IUser;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  error: string | null;
}

// Get user from localstorage
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const user = JSON.parse(localStorage.getItem('user'));

const initialUser: IUser = {
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

const initialState: IUserState = {
  user: user ?? initialUser,
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: '',
};

// Register new user
export const register = createAsyncThunk<IUser, INewUser, { rejectValue: string }>(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await registerRequest(user);

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, 'auth/register');
    }
  }
);

// Login user
export const login = createAsyncThunk<IUser, ILoginUser, { rejectValue: string }>(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await loginRequest(user);

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, 'auth/login');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, { payload }: PayloadAction<IUser>) => {
      localStorage.setItem('user', JSON.stringify(payload));
      state.user = payload;
    },
    userLogout: () => {
      localStorage.removeItem('user');
      return { ...initialState, user: initialUser };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
