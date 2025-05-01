import React, { useRef, useState } from "react";
import Results from "./Results";

function Input() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState({});
  let inputRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, input]);
    inputRef.current.value = "";
  }

  function handleDelete(id) {

    let deteleItem=todo.filter((e)=>e.id!==id)
    setTodo(deteleItem);
  }
  function handleEdit(id,newtask) {

    let updateTodo=todo.map((e)=>e.id==id? {...e,task:newtask}:e)

    setTodo(updateTodo)
  }

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <h2 className="bg-gray-800 w-full text-white text-center text-3xl py-4 shadow-md">
        TODO
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-40 w-80 justify-center space-y-4 items-center mt-10 bg-white p-6 rounded-lg shadow-lg"
      >
        <input
          ref={inputRef}
          type="text"
          className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Add a todo"
          onChange={(e) =>
            setInput({ id: Date.now() + 1, task: e.target.value })
          }
        />
        <button
          type="submit"
          className="p-2 w-full bg-orange-500 font-bold text-white rounded-md hover:bg-orange-600 transition duration-300"
        >
          ADD
        </button>
      </form>
      <Results
        todo={todo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Input;
