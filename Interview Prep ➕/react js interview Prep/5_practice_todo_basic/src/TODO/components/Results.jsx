import React, { useState } from "react";

function Results({
  id,
  task,
  isChecked,
  deleteTodo,
  editInputTodo,
  checkedInput,
}) {


  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div
        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-2"
        style={{ width: "80%", margin: "0 auto", paddingTop: "20px" }}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-4 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            checked={isChecked}
            onChange={() => checkedInput(id)}
          />
          <h2
            className={`text-lg font-medium ${isChecked ? `line-through` : ""}`}
          >
            {task}
          </h2>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => editInputTodo(id)}
            className="text-white bg-yellow-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(id)}
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
