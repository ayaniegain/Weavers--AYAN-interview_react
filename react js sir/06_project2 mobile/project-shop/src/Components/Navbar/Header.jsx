import React from "react";

function Header({ gotoHome, gotoCart }) {
  return (
    <nav className="bg-[#000957] border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <p
          onClick={() => gotoHome(false)}
          className="text-2xl font-semibold text-gray-200 cursor-pointer"
        >
          MyWebsite
        </p>
        <div className="hidden md:flex space-x-8">
          <p
            onClick={() => gotoHome(false)}
            className="text-gray-100 hover:text-gray-400  cursor-pointer"
          >
            Home
          </p>
          <p className="text-gray-100 hover:text-gray-400  cursor-pointer">
            About
          </p>
          <p className="text-gray-100 hover:text-gray-400  cursor-pointer">
            Services
          </p>
          <p className="text-gray-100 hover:text-gray-400  cursor-pointer">
            Pricing
          </p>
          <p
            onClick={() => gotoCart(true)}
            className="text-gray-100 hover:text-gray-400  cursor-pointer"
          >
            Cart
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
