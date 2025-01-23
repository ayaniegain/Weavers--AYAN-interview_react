import React, { useState } from "react";

function ProductPage({ product, productDetailsAdd }) {
  const { price, img, details, originalPrice, title } = product;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={img}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-xl font-bold text-gray-800 mb-2">{title}</h1>
          <div className="text-xl text-gray-700 mb-4">
            <span className="line-through text-red-500 mr-2">${originalPrice}</span>
            <span className="font-bold text-green-600">${price}</span>
          </div>
          <p className="text-gray-600 mb-4">{details.slice(0,40)}...</p>
          <button
            onClick={() => productDetailsAdd(product, true)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
