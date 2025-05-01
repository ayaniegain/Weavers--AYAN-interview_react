import React, { useState } from "react";

function Content() {
  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);
  let [eId, setEid] = useState(null);
  let [toggleUpdate, setToggleUpdate] = useState(false);

  function handleChnage(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    let newTask = todo.some((e) => e.task === input);

    if (input==="") {
      alert("add some task");
      return;
    }
    if (newTask) {
      alert("duplicate task");
      return;
    }

    setTodo([...todo, { task: input, id: Date.now() + 1 }]);
    setInput("");
  }
  function handleDelete(id) {
    let filterTodo = todo.filter((e) => e.id !== id);

    setTodo(filterTodo);
  }
  function handleEdit(id) {
    let EditInputValue = todo.find((e) => e.id == id);

    setInput(EditInputValue.task);
    setToggleUpdate(true);
    setEid(id);
  }

  function handleUpdate() {

    if (input==="") {
        alert("add some task");
        return;
      }

    let updateTask = todo.map((e) =>
      e.id === eId ? { ...e, task: input } : e
    );

    setTodo(updateTask);
    setToggleUpdate(false);
    setEid(null);
    setInput("");
  }

  return (
    <div className="flex flex-col pt-20 items-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">TODO</h2>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border-gray-800 border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add task"
          value={input}
          onChange={(e) => handleChnage(e)}
          required
        />

        {!toggleUpdate ? (
          <button
            onClick={() => handleAdd()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        ) : (
          <button
            onClick={() => handleUpdate()}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Update
          </button>
        )}
      </div>
      {todo.length >= 1 &&
        todo.map(({ id, task }) => (
          <div
            key={id}
            className="flex items-center gap-4 bg-white shadow-md p-4 rounded-md w-full max-w-md"
          >
            <p className="text-gray-700 font-medium">1{")"}</p>
            <h4 className="flex-1 text-gray-800 font-semibold">{task}</h4>
            <button
              onClick={() => handleEdit(id)}
              className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Content;
