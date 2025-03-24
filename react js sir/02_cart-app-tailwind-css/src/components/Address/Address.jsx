import React from "react";

function Address() {
  return (
    <div className="flex justify-between px-10 h-20 items-center ">
      <h2 className="text-black">From Saved Addresses</h2>
      <button className="btn border-gray-300 bg-white hover:drop-shadow-lg hover:border-gray-300 hover:bg-white text-blue-500 ">
        Enter Delivery Pincode
      </button>
    </div>
  );
}

export default Address;
