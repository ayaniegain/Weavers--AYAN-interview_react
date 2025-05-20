import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateCart, inputTextFunc } from "../REDUX/toDoSlice";
import { useRef } from "react";

function Input() {
  let clrInput = useRef();
  let dispatch = useDispatch();

  let textInput = useSelector((state) => state.mytodo.inputValue);
  let toggleBtn = useSelector((state) => state.mytodo.toggleBtn);

  function handleAdd(e) {
    e.preventDefault();
    dispatch(addTodo(textInput));
    clrInput.current.value = "";
  }

  function handleUpDate(e) {
    e.preventDefault();
    dispatch(updateCart(textInput));
    clrInput.current.value = "";
  }

  return (
    <form
      onSubmit={toggleBtn ? handleUpDate : handleAdd}
      className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        TODO
      </h2>
      <input
        type="text"
        ref={clrInput}
        value={textInput}
        placeholder="Add todo"
        onChange={(e) => dispatch(inputTextFunc(e.target.value))}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {toggleBtn ? (
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Edit
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      )}
    </form>
  );
}

export default Input;
