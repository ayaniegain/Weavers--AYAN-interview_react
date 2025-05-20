import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkboxSelected, deleteTodo, getEditId } from '../redux/todoSlice'

function TodoResults() {
  const { todo } = useSelector((state) => state.todo)

  console.log(todo)
  let dispatch = useDispatch()

  return (
    <div className="space-y-4">
      {todo.map(({ id, task, isChecked }) => (
        <div
          key={id}
          className="flex items-center justify-between bg-white shadow p-4 rounded-md"
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={()=>dispatch(checkboxSelected(id))}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <h2 className={`text-lg font-medium ${isChecked ? 'line-through text-gray-400' : ''}`}>
              {task}
            </h2>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => dispatch(getEditId(id))}
              className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(id))}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoResults