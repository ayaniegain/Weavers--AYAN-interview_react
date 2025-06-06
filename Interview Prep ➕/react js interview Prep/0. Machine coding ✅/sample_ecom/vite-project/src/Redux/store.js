import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product.slice.js"


export const store = configureStore({
  reducer: {
    product: productReducer
  },
})