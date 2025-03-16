import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: function (state, action) {
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    removeCartItem: function (state, action) {
      state.cart = state.cart.filter((item) => item.id !== +action.payload);
    },
    incQty: function (state, action) {

      state.cart = state.cart.map((item) =>
        +item.id == +action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decQty: function (state, action) {
      state.cart = state.cart.map((item) =>
        +item.id == +action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
    },
  },
});

export const { addCart, removeCartItem, incQty, decQty } = cartSlice.actions;

export default cartSlice.reducer;

export function useCartFunction() {
  return useSelector((state) => {
    // console.log(state.cart)
    return state.cart;
  });
}
