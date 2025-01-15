import React from "react";

function Items({ product, handleGetProductId }) {
  const {
    id,
    title,
    category,
    price,
    discountPercentage,
    rating,
    thumbnail,
    reviews,
  } = product;

  const finalPrice = price - (price * discountPercentage) / 100;
  const percentageOff = discountPercentage;

  return (
    <div
      className="item-container p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 "
      onClick={() => handleGetProductId(id)}
    >
      <img
        src={thumbnail}
        alt={title}
        className="item-thumbnail w-full h-48 object-cover rounded-t-lg bg-white"
      />
      <div className="p-4">
        <h2 className="item-title text-xl font-semibold mt-2">{title}</h2>
        <span className="item-category text-gray-500">{category}</span>
        <div className="item-rating flex items-center mt-2">
          <p className="mr-2 bg-green-500 text-white px-2 py-1 rounded">
            {rating}
          </p>
          <p className="text-gray-500">({reviews.length}) reviews</p>
        </div>
        <div className="item-price-section mt-4">
          <p className="item-final-price text-lg font-bold text-green-600">
            ₹{finalPrice.toFixed(2)}{" "}
            <span className=" text-sm line-through font-thin text-gray-500">
              ₹{price}
            </span>
          </p>
          <p className="item-percentage-off text-sm text-red-500 ml-2">
            ({percentageOff}% off)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Items;
