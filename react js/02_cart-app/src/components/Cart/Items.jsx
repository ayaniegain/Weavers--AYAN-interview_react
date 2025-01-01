import React, { useEffect, useState } from "react";

import { formatedDate } from "../customDate/customDate.js";

function Items({ item }) {
  const {
    productName,
    variant,
    imageUrl,
    seller,
    price,
    originalPrice,
    discount,
    quantity,
    additionalOffers,
    delivery: { estimatedDate, charges },
  } = item;

  let dateOfDelivery = formatedDate(estimatedDate);

  const [productCount, setProductCount] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(price);
  const [originalTotalPrice, setOriginalPrice] = useState(originalPrice);

  function handleChange(e) {
    let action = parseInt(e.target.value);

    if (action && action > 1) {
      setProductCount(+action);
    }
  }

  function handleClick(action) {
    if (action && action == "inc") setProductCount((prev) => prev + 1);
    if (action && action == "dec")
      setProductCount((prev) => (prev <= 1 ? 1 : prev - 1));
  }

  useEffect(() => {
    setTotalPrice(productCount * price);
    setOriginalPrice(originalPrice * productCount);
  }, [productCount, price]);

  

  return (
    <div className="flex flex-col justify-between px-10 py-4 border-b-2 border-gray-200">
      <div className="cart-details ">
        {/* <CartDetails/> */}
        <div className="flex flex-row justify-evenly items-start">
          <img src={imageUrl} alt="pImg" className="h-28 w-32" />
          <div className="flex flex-col gap-2">
            <h2 className="text-black">
              {productName.length > 30
                ? productName.slice(0, 30) + "..."
                : productName}
            </h2>
            <p>{variant}</p>
            <p>Seller:{seller}</p>
            <p>
              <span className="line-through text-gray-500">
                ₹{originalTotalPrice}
              </span>
              <span className="text-2xl text-black ml-2">₹{totalPrice}</span>
              <span className="text-green-700 ml-2">{discount}% Off</span>
            </p>
            <ul className="text-green-700 ml-2">
              {additionalOffers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>
          <div className="text-black space-x-2 text-center text-sm">
            Delivery by {dateOfDelivery} |
            {charges > 42 ? (
              <>
                <span className="pl-1 ">₹{charges}</span>
                <span className="text-red-600 font-medium">Charges</span>
              </>
            ) : (
              <>
                <span className="pl-1 line-through">₹42</span>
                <span className="text-green-600 font-medium">Free</span>
              </>
            )}
            <p className="pt-4 uppercase text-orange-500">
              quantity: {productCount}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="addvertisement-details">
        <PromotionSection/>
      </div> */}
      <div className="product-count-details flex text-black gap-10 py-10 pl-20">
        {/* <CartCount/> */}
        <div className="relative flex items-center max-w-[8rem] space-x-2 ">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full p-2 h-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            onClick={() => handleClick("dec")}
          >
            <svg
              className="w-3 h-3 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            aria-describedby="helper-text-explanation"
            className="bg-white border border-grey-900 h-10 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2"
            // placeholder={productCount}
            value={productCount}
            required
            onChange={handleChange}
          />

          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full p-2 h-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            onClick={() => handleClick("inc")}
          >
            <svg
              className="w-3 h-3 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <button className="font-medium">SAVE FOR LATER</button>
        <button className="font-medium">REMOVE</button>
      </div>
    </div>
  );
}

export default Items;
