import { configureStore } from '@reduxjs/toolkit'
import productReducers from "./product.slice.js"

export const store = configureStore({
  reducer: {
    product: productReducers
  },
})