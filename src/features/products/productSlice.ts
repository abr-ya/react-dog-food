import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { isError, typedCatchHandler } from "../../lib/rtkHelper";

import { addReviewReguest, getProductReguest, setProductLikeReguest } from "./productsService";

import { IProductDetail } from "../../interfaces";
import { IProductReviewPayload } from "../../api/contracts";

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

export const getProduct = createAsyncThunk("getProduct", async (id: string, { rejectWithValue }) => {
  try {
    const { data } = await getProductReguest(id);

    return data;
  } catch (error) {
    return typedCatchHandler(error, rejectWithValue, "getProduct");
  }
});

export const setLike = createAsyncThunk(
  "setLike",
  async ({ id, like = true }: { id: string; like: boolean }, { rejectWithValue }) => {
    try {
      const { data } = await setProductLikeReguest(id, like);

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "setLike");
    }
  },
);

export const addReview = createAsyncThunk(
  "addReview",
  async ({ id, payload }: { id: string; payload: IProductReviewPayload }, { rejectWithValue }) => {
    try {
      const { data } = await addReviewReguest(id, payload);

      return data;
    } catch (error) {
      return typedCatchHandler(error, rejectWithValue, "addReview");
    }
  },
);

const productDetailSlice = createSlice({
  initialState,
  name: "productDetail",
  // eslint-disable-next-line sort-keys
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<IProductDetail>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(setLike.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setLike.fulfilled, (state, action: PayloadAction<IProductDetail>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addReview.fulfilled, (state, action: PayloadAction<IProductDetail>) => {
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
