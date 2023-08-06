import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/authSlice";
import cartReducer from "../features/products/cartSlice";
import productsReducer from "../features/products/productsListSlice";
import productReducer from "../features/products/productSlice";
import { productApi, userApi } from "../api/apiQuery";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  auth: userReducer,
  cart: cartReducer,
  productDetail: productReducer,
  products: productsReducer,
  [productApi.reducerPath]: productApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(productApi.middleware, userApi.middleware),
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
