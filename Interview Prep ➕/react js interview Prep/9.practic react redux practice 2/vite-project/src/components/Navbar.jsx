import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { searchItem } from "../redux/cartSlice";

function Navbar() {
  let navigate=useNavigate()

  let dispatch=useDispatch()

  const[text,setText]= useState('')


  function handleSubmit(e){
    e.preventDefault()

    dispatch(searchItem(text))

    navigate("/search-results")
setText('')
  }
  return (
    <div className="flex items-center text-white font-bold justify-between px-10 py-4 bg-green-700 shadow-md">
      <NavLink to={"/"}>
        {({ isActive }) => (
          <span
            className={`text-2xl font-extrabold tracking-wide transition-colors duration-200 ${
              isActive ? "text-indigo-200" : "text-white"
            }`}
          >
            Logo
          </span>
        )}
      </NavLink>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
          type="text"
          placeholder="Search item"
          className="px-3 py-1 bg-amber-50 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button type="submit"
          className="bg-white text-green-700 px-3 py-1 rounded-md font-semibold hover:bg-green-100 transition-colors duration-200"
        >
          Submit
        </button>
      </form>

      <ul className="flex items-center gap-8">
        <NavLink to={"/"}>
          {({ isActive }) => (
            <li
              className={`cursor-pointer transition-colors duration-200 ${
                isActive ? "text-orange-400 underline" : "text-white hover:text-orange-200"
              }`}
            >
              Toto
            </li>
          )}
        </NavLink>

        <NavLink to={"/product"}>
          {({ isActive }) => (
            <li
              className={`cursor-pointer transition-colors duration-200 ${
                isActive ? "text-orange-400 underline" : "text-white hover:text-orange-200"
              }`}
            >
              Product
            </li>
          )}
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
