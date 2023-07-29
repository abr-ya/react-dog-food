import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { IProduct, IProductDetail, IProductInCart } from '../../interfaces';
import { normalizeToCart } from './normalize';

interface IState {
  count: number;
  data: IProductInCart[];
  total: number;
}

const initialState: IState = {
  count: 0,
  data: [],
  total: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct | IProductDetail>) => {
      const existingIndex = state.data.findIndex((item) => item._id === action.payload._id);

      if (existingIndex !== -1) {
        state.data[existingIndex] = {
          ...state.data[existingIndex],
          value: state.data[existingIndex].value + 1,
        };
        toast.info('Увеличено кол-во товара в корзине');
      } else {
        state.data.push(normalizeToCart(action.payload));
        toast.success('Товар добавлен в корзину');
      }
      state.count += 1;
    },
    updateCartItem: (state, action: PayloadAction<{ id: string; value: number }>) => {
      const { id, value } = action.payload;
      const itemIndex = state.data.findIndex((item) => item._id === id);
      state.data[itemIndex] = { ...state.data[itemIndex], value };
      toast.info(`Кол-во товара в корзине изменено на ${value}`);
      state.count = state.data.reduce((acc, el) => acc + el.value, 0);
    },
    reset: () => initialState,
  },
});

export const { addToCart, updateCartItem, reset } = cartSlice.actions;

export default cartSlice.reducer;
