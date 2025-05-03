import React, { createContext, useReducer } from "react";
export let AllTodoContext = createContext();

function TodoContextReducer({ children }) {
  let todo = [];

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.payload];

      case "DELETE_TASK":
        console.log(action);
        return state.filter((item) => item.id !== action.payload);

      default:
        state;
    }
  }

  const [state, dispatch] = useReducer(reducer, todo);

  // console.log(state)
  return (
    <AllTodoContext.Provider value={{ state, dispatch }}>
      {children}
    </AllTodoContext.Provider>
  );
}

export default TodoContextReducer;
