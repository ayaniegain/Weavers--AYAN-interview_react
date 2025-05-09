import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, setInputValue,checkedInput } from '../REDUX/toDoSlice'

function Results() {
  const dispatch = useDispatch()

  let {eId,cart :AllCART} = useSelector((state) => state.mytodo)

  if (!AllCART) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold text-gray-600">Loading...</h2>
      </div>
    )
  }

  console.log(AllCART)
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">My Todo List</h2>

      <div className="space-y-4">
        {AllCART.map(({ id, todo, isChecked }) => (
          <div
            key={id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded shadow"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={isChecked}
                className="h-5 w-5 text-blue-500"
                onChange={()=>dispatch(checkedInput(id))}
              />
              <h2
              

                className={`text-lg  ${isChecked ? "line-through text-gray-500" :"text-gray-800" }`}
                >
                {todo}
              </h2>
            </div>
            <div className="space-x-2">
             
              <button
                onClick={() => dispatch(setInputValue(id))}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTodo(id))}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                disabled={id===eId}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Results