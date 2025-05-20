import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="text-white font-bold text-xl">MyShop</Link>
        <div className="space-x-4">
          <Link to={"/"} className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to={"/cart"} className="text-white hover:text-gray-200">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
