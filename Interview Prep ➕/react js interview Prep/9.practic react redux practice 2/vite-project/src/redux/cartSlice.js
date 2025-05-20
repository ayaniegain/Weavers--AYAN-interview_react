import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  searchedItem:[],
  loading:false,
  error:null,
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    loadCartData:(state,action)=>{
      state.cart=action.payload
    },
   
    deleteCart: (state,action) => {

    
      state.cart= state.cart.filter((e)=>e.id!==+action.payload)
    },

    searchItem:(state,action)=>{

      state.searchedItem= state.cart.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase()))

    }

   
  },
})

export const { loadCartData, deleteCart ,searchItem} = cartSlice.actions

export default cartSlice.reducer