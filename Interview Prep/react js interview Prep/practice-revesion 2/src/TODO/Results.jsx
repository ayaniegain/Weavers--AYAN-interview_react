import React, { useState } from "react";

function Results({ todo, handleDelete, handleEdit }) {
  let [editId, setEditId] = useState(null);

  function updateTask(id, editTask) {
    handleEdit(id, editTask);
  }

  function toggleChanges(id) {
    setEditId(id);
  }

  return (
    <div className="p-6 mt-6 space-y-6 bg-gray-50 rounded-lg shadow-md">
      {todo.map(({ task, id }, i) => (
        <section
          key={id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-4 w-40">
            <span>
              {i + 1}
              {")"}
            </span>

            <h2 className="text-lg font-medium text-gray-800 truncate">
              {editId != id ? (
                `${task} `
              ) : (
                <input
                  type="text"
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={task}
                  onChange={(e) => updateTask(id, e.target.value)}
                />
              )}
            </h2>
          </div>
          <div className="space-x-3">
            {editId != id ? (
              <button
                onClick={() => toggleChanges(id)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                EDIT
              </button>
            ) : (
              <button
                onClick={() => setEditId(null)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                ADD
              </button>
            )}
            <button
              onClick={() => handleDelete(id)}
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              DELETE
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Results;
