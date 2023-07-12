import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/authSlice';
import productsReducer from '../features/products/productsListSlice';
import productReducer from '../features/products/productSlice';
// import ticketReducer from '../features/ticket/ticketSlice';
import { todoApi } from '../features/todo/todoApi';
import { userApi } from '../api/apiQuery';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    productDetail: productReducer,
    products: productsReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (gDM) => gDM().concat(todoApi.middleware, userApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
