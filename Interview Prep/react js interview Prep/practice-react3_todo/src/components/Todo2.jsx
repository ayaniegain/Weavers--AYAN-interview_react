import React, { useContext } from "react";
import "./todo.css";
import { AllTodoContext } from "../context/TodoReducer";

function Todo2() {
  const { state:todo, dispatch } = useContext(AllTodoContext);




  return (
    <table>
      <thead>
        <tr className="table-head">
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="table-data">
        {todo &&
          todo.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.task}</td>
              <td>
                <button onClick={() =>dispatch({type:"DELETE_TASK", payload:  item.id })}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Todo2;
