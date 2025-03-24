import React from 'react'

function Search() {
  return (
    <div className=' w-[500px]  flex justify-evenly'>
      <label className="input h-9 rounded-none bg-white w-full px-6 flex items-center justify-between gap-2 ">
  <input type="text" className="grow text-  outline-none" placeholder="Search for Products, brands and more" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-6 w-6 items-center opacity-70 text-blue-700 cursor-pointer">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
    </div>
  )
}

export default Search