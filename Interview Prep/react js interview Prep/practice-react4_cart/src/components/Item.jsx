import React from "react";
import { NavLink } from "react-router";

function Item({ item }) {
  const { id,image, title } = item;
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg max-w-xs">
      <div className="text-lg font-bold">{id}</div>
      <img src={image} alt={id} className="w-24 h-24 object-container mx-auto" />
      <div className="text-gray-700">{title}</div>
      <NavLink
        to={`/details?productId=${item.id}`}
        className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        DETAILS
      </NavLink>
    </div>
  );
}

export default Item;
