import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isError, typedCatchHandler } from '../../lib/rtkHelper';

import { getProductsReguest } from './productsListService';

import { IProductsListData } from './interfaces';
import { normalizeListResponse } from './normalize';

interface IState {
  data: IProductsListData;
  error: string | null;
  isLoading: boolean;
}

const initialState: IState = {
  data: {
    products: [],
    total: 0,
  },
  error: null,
  isLoading: false,
};

export const getProducts = createAsyncThunk('acts/find', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getProductsReguest();

    return data;
  } catch (error) {
    return typedCatchHandler(error, rejectWithValue, 'acts/find');
  }
});

const productsListSlice = createSlice({
  initialState,
  name: 'productsList',
  // eslint-disable-next-line sort-keys
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = normalizeListResponse(action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
        state.data = initialState.data;
      });
  },
  reducers: {
    reset() {
      return initialState;
    },
  },
});

export const { reset } = productsListSlice.actions;

export default productsListSlice.reducer;
