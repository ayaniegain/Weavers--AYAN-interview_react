// import React, { createContext, useState } from "react";

// export let AllTodoContext = createContext();
// function TodoContext({ children }) {
//   const [todo, setTodo] = useState([]);

//   function deleteTodo(id) {
//     let filteredArray = todo.filter((item) => item.id !== id);
//     setTodo(filteredArray);
//   }
//   return (
//     <AllTodoContext.Provider value={{ todo, setTodo, deleteTodo }}>
//       {children}
//     </AllTodoContext.Provider>
//   );
// }

// export default TodoContext;
