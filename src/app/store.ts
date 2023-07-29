import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/authSlice';
import cartReducer from '../features/products/cartSlice';
import productsReducer from '../features/products/productsListSlice';
import productReducer from '../features/products/productSlice';
import { productApi, userApi } from '../api/apiQuery';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    cart: cartReducer,
    productDetail: productReducer,
    products: productsReducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (gDM) => gDM().concat(productApi.middleware, userApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
