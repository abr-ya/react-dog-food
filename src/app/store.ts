import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/authSlice';
import productsReducer from '../features/products/productsListSlice';
import productReducer from '../features/products/productSlice';
// import ticketReducer from '../features/ticket/ticketSlice';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    productDetail: productReducer,
    products: productsReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
