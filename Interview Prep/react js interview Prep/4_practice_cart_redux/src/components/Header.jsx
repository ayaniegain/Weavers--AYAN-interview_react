import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <NavLink to={"/"} className="text-xl font-bold">
        Logo
      </NavLink>
      <div>
        <NavLink
          to={"/cart"}
          className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200"
        >
          CART
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
