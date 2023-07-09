import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isError, typedCatchHandler } from '../../lib/rtkHelper';

import { getProductReguest } from './productsService';

import { IProductDetail } from '../../interfaces';

interface IState {
  data: IProductDetail | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: IState = {
  data: null,
  error: null,
  isLoading: false,
};

export const getProduct = createAsyncThunk('getProduct', async (id: string, { rejectWithValue }) => {
  try {
    const { data } = await getProductReguest(id);

    return data;
  } catch (error) {
    return typedCatchHandler(error, rejectWithValue, 'getProduct');
  }
});

const productDetailSlice = createSlice({
  initialState,
  name: 'productDetail',
  // eslint-disable-next-line sort-keys
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
        state.data = null;
      });
  },
  reducers: {
    reset() {
      return initialState;
    },
  },
});

export const { reset } = productDetailSlice.actions;

export default productDetailSlice.reducer;
