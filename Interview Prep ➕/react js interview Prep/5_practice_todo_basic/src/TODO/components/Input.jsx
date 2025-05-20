import React, { useState } from "react";
import Results from "./Results";

function Input() {
  let [inputValue, setInputValue] = useState("");
  let [todo, setTodo] = useState([]);
  let [toggleEdit, setToggleEdit] = useState(false);
  let [editId, setEditId] = useState(null);

  function handleChangeInput(task) {
    setInputValue(task);
  }

  function addToDO(e) {
    e.preventDefault();
    setTodo((prev) => [
      ...todo,
      { ...prev, id: Date.now(), task: inputValue, isChecked: false },
    ]);
    setInputValue("");
  }

  function deleteTodo(id) {
    setTodo(todo.filter((e) => e.id !== id));
  }
  function editInputTodo(id) {
    let getTodo = todo.find((e) => e.id === id);

    setInputValue(getTodo?.task);
    setToggleEdit(true);
    setEditId(id);
  }
  function updateTodo(e) {
    e.preventDefault();

    let updatedValue = todo.map((e) =>
      e.id == editId ? { ...e, task: inputValue,isChecked: false } : e
    );

    setTodo(updatedValue);

    setEditId(null);
    setToggleEdit(false);
    setInputValue("");
  }

  function checkedInput(id) {

    setTodo(
      todo.map((e) =>
        e.id == id? { ...e, isChecked: !e.isChecked }: e
      )
    );
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-green-600">
        TODO
      </h2>
      <form
        className="flex flex-col items-center w-full max-w-md"
        onSubmit={toggleEdit ? updateTodo : addToDO}
      >
        <input
          type="text"
          placeholder="Add todo"
          value={inputValue}
          onChange={(e) => handleChangeInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />

        {toggleEdit ? (
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-200 transition"
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        )}
      </form>
      {}
      <div className="w-1/2">
        <h2 className=" text-center mt-4 text-xl font-bold mb-4 text-green-600">
          My All Todos
        </h2>
        {todo.length < 1 ? (
          <div className="flex justify-center">
            {" "}
            <h2 className="text-3xl text-orange-400">No Todo found</h2>
          </div>
        ) : (
          <>
            {todo.map(({ id, task, isChecked }) => (
              <Results
                id={id}
                task={task}
                isChecked={isChecked}
                key={id}
                deleteTodo={deleteTodo}
                editInputTodo={editInputTodo}
                checkedInput={checkedInput}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Input;
