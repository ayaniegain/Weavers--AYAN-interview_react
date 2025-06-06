import React, { useState } from "react";
import { Link } from "react-router";

function Navbar() {

  
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-blue-100 shadow-md">
      <Link to={"/"}>
        <h2 className="text-2xl font-bold text-blue-600">logo</h2>
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link
            to={"/ecomerce"}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Ecom
          </Link>
        </li>
        <li>
          <Link
            to={"/blog"}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={"/register"}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to={"/todo"}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Todo
          </Link>
        </li>
        <li>
          <Link
            to={"/cart"}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
