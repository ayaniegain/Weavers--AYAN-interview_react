import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../API/dataFetch";

const fetchProducts = createAsyncThunk(
  "users/fetchproduct",
  async (_, thunkAPI) => {
     try {
      const response = await API.getAllProducts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch products');
    }
  }
);

const fetchProductDetails = createAsyncThunk(
  "users/fetchDetails",
  async (productId, thunkAPI) => {
    try {
      const response = await API.productDetails(productId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch product details');
    }
  }
);

const initialState = {
  product: [],
  cart: [],
  loading: "success",
  error: null,
  productDetails: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.find(item => item.id === action.payload.id);
  if (!exists) {
    state.cart.push(action.payload);
  }
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== +action.payload);
    },
    deleteAllCart: (state, action) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "success";
        state.product = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.payload;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.productDetails = action.payload;
      });
  },
});

export const { addToCart, deleteCart, deleteAllCart } = productSlice.actions;
export { fetchProducts, fetchProductDetails };
export default productSlice.reducer;
