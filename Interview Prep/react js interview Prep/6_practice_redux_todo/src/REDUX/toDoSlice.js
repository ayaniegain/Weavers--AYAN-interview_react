import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  eId: null,
  toggleBtn: false,
  inputValue: "",
};

const toDoSlice = createSlice({
  name: "mytodo",
  initialState,
  reducers: {
    inputTextFunc: (state, action) => {
      console.log(action.payload);
      state.inputValue = action.payload;
    },

    addTodo: (state, action) => {
      console.log(action.payload);
      state.cart.push({
        todo: action.payload,
        id: Date.now(),
        isChecked: false,
      });
    },

    deleteTodo: (state, action) => {
      state.cart = state.cart.filter((e) => e?.id !== action.payload);
      // console.log(state.cart.filter((e) => e?.id !== action.payload))

      console.log(state.cart)
    },

    setInputValue: (state, action) => {
      state.toggleBtn = true;
      let inputvalueText = state.cart.find((e) => e.id == action.payload);

      state.inputValue = inputvalueText.todo;
      state.eId = action.payload;
    },

    updateCart: (state, action) => {
      state.toggleBtn = false;
      state.cart = state.cart.map((e) =>
        e.id == state.eId ? { ...e, todo: action.payload ,isChecked: false} : e
      );

      state.inputValue = "";
    },

    checkedInput:(state, action)=>{
        state.cart = state.cart.map((e) =>
            e.id == action.payload ? { ...e, isChecked: !e.isChecked } : e
          );
    }
  },
});

export const { addTodo, deleteTodo,checkedInput, setInputValue, inputTextFunc, updateCart } =
  toDoSlice.actions;

export default toDoSlice.reducer;
