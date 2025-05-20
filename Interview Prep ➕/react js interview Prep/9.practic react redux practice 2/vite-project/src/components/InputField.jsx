import { useDispatch, useSelector } from "react-redux"
import { addTodo, setInputValue } from "../redux/todoSlice"

function InputField() {
    const dispatch = useDispatch()
    const { inputValue,toggle } = useSelector((state) => state.todo)

    function handleSubmit(e) {
        e.preventDefault()
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue))
        }
    }

    function updateTodo(e) {
        e.preventDefault()
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue))
        }
    }

    return (
        <form
            onSubmit={toggle? updateTodo:handleSubmit}
            className="bg-amber-100  flex flex-col items-center justify-center"
        >
            <h2 className="text-red-600 text-3xl font-bold mb-6">Todo</h2>
            <div className="flex gap-3 w-full max-w-md">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => dispatch(setInputValue(e.target.value))}
                    placeholder="Write task"
                    className="flex-1 border border-amber-950 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
               
                  {toggle?
                   <button
                    type="submit"
                    className="bg-green-800 px-4 py-2 rounded text-white font-semibold hover:bg-green-700 transition"
                > update
                </button>
                  :
                   <button
                    type="submit"
                    className="bg-green-800 px-4 py-2 rounded text-white font-semibold hover:bg-green-700 transition"
                >add
                </button>
                  
                  }  
            </div>
        </form>
    )
}

export default InputField