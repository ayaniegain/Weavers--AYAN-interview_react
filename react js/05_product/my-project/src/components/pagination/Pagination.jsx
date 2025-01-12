import React from 'react'

function Pagination() {
  return (
    <div className="join py-2">
      <input
        className="join-item btn btn-square bg-white text-gray-700 hover:bg-gray-200 focus:bg-blue-500 focus:text-white"
        type="radio"
        name="options"
        aria-label="1"
        defaultChecked
      />
      <input
        className="join-item btn btn-square bg-white text-gray-700 hover:bg-gray-200 focus:bg-blue-500 focus:text-white"
        type="radio"
        name="options"
        aria-label="2"
      />
      <input
        className="join-item btn btn-square bg-white text-gray-700 hover:bg-gray-200 focus:bg-blue-500 focus:text-white"
        type="radio"
        name="options"
        aria-label="3"
      />
      <input
        className="join-item btn btn-square bg-white text-gray-700 hover:bg-gray-200 focus:bg-blue-500 focus:text-white"
        type="radio"
        name="options"
        aria-label="4"
      />
    </div>
  )
}

export default Pagination