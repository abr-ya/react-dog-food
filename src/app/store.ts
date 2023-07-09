import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/authSlice';
import productsReducer from '../features/products/productsListSlice';
// import ticketReducer from '../features/ticket/ticketSlice';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    products: productsReducer,
    // ticket: ticketReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
