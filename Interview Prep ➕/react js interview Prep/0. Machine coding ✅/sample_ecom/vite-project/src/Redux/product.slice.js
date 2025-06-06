import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productLIst: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.productLIst = action.payload;
    },
  },
});

export const { getAllProducts } = productSlice.actions;

export default productSlice.reducer;
