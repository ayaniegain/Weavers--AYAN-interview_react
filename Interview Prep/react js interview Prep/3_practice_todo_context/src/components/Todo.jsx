// import React, { useContext } from "react";
// import "./todo.css";
// import { AllTodoContext } from "../context/TodoContext";

// function Todo() {
//   const { todo, deleteTodo } = useContext(AllTodoContext);
//   return (
//     <table>
//       <thead>
//         <tr className="table-head">
//           <th>ID</th>
//           <th>Name</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody className="table-data">
//         {todo &&
//           todo.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.task}</td>
//               <td>
//                 <button onClick={() => deleteTodo(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//       </tbody>
//     </table>
//   );
// }

// export default Todo;
