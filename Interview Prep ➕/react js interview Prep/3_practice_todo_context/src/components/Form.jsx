// import React, { useContext, useState } from "react";
// import "./form.css";
// import { AllTodoContext } from "../context/TodoContext";

// function Form() {
//   const [task, setTask] = useState("");
//   const [id, setId] = useState(1);

//   const { setTodo, todo } = useContext(AllTodoContext);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!task.trim()) return;
//     setTodo([...todo, { task, id }]);
//     setId(id + 1);
//     setTask("");
//   }

//   function handleChanges(e) {
//     setTask(e.target.value);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>My Todo</h2>
//         <div className="input-sec">
//           <input
//             type="text"
//             value={task}
//             onChange={handleChanges}
//             placeholder="Enter a task..."
//           />
//           <button type="submit">Add</button>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Form;
