import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./toDoSlice";

export const store = configureStore({
  reducer: {
    mytodo: todoReducers,
  },
});
