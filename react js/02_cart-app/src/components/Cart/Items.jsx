import React from "react";
import PromotionSection from "../PromotionArea/PromotionSection";
import product from "../../assets/01_img.webp";

function Items() {
  return (
    <div className="flex flex-col justify-between px-10 py-4 border-b-2 border-gray-200">
      <div className="cart-details ">
        {/* <CartDetails/> */}
        <div className="flex flex-row justify-evenly items-start">
          <img src={product} alt="pImg" className="h-28 w-32" />
          <div className="flex flex-col gap-2">
            <h2 className="text-black">
              Mobofix New Edition TWS M19 Gaming Earbuds Blueto...
            </h2>
            <p>Black, True Wireless</p>
            <p>Seller:Mobofix Digital</p>
            <p>
              <span className="line-through text-gray-500">₹1,299</span>
              <span className="text-2xl text-black ml-2">₹426</span>
              <span className="text-green-700 ml-2">67% Off</span>
              <span className="text-green-700 ml-2">10 offers available</span>
            </p>
          </div>
          <p className="text-black space-x-2 text-center text-sm">
            Delivery by Tue Dec 31 |<span className="pl-1">₹42</span>{" "}
            <span className="text-green-600 font-medium">Free</span>
          </p>
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
          {/* <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-white border-1 border-x-blackblack h-10 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2" placeholder="1" required /> */}
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            aria-describedby="helper-text-explanation"
            className="bg-white border border-grey-900 h-10 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2"
            placeholder="1"
            required
          />

          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full p-2 h-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
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
