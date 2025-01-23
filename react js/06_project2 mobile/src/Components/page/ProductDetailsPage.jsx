import React from 'react';

function ProductDetailsPage({ productDetailsPageData, cartDetailsAdd }) {
  const { title, price, img, originalPrice, details, quantity } = productDetailsPageData;

  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-col md:flex-row items-center p-20">
        <img src={img} alt={title} className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg" />
        <div className="md:ml-4 mt-2 md:mt-0">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-700 mt-1">{details}</p>
          <div className="mt-2">
            <span className="text-lg font-semibold text-green-600">${price}</span>
            <span className="text-sm line-through text-gray-500 ml-1">${originalPrice}</span>
          </div>
          <p className="mt-1">Quantity: {quantity}</p>
          <button
            onClick={() => cartDetailsAdd(productDetailsPageData, true)}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
