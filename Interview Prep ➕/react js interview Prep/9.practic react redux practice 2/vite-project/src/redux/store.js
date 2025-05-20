import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./todoSlice.js"
import cartReducer from "./cartSlice.js"

export const store = configureStore({
  reducer: {
    'todo':todoReducer,
    'cart':cartReducer
  },
})