import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/authSlice';
import productsReducer from '../features/products/productsListSlice';
import productReducer from '../features/products/productSlice';
// import ticketReducer from '../features/ticket/ticketSlice';
import { todoApi } from '../features/todo/todoApi';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    productDetail: productReducer,
    products: productsReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (gDM) => gDM().concat(todoApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
