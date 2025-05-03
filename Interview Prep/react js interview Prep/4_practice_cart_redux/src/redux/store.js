import { configureStore } from '@reduxjs/toolkit'
import  CartReducer   from './cartSlice'

export const store = configureStore({
    reducer: CartReducer ,
  })