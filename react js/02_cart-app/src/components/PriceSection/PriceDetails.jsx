import React from "react";


function PriceDetails() {
  return (
    <div className="pr-44">
      <div className="group container bg-white h-80 flex flex-col gap-4 p-6 ">
        <p className="font-bold">PRICE DETAILS</p>
        <hr />
        <div className="price-detail flex justify-between text-black">
          <p>Price (3 items):</p>
          <span className="text">₹59,448</span>
        </div>
        <div className="price-detail flex justify-between text-black">
          <p>Discount:</p>
          <span className="text text-green-600">-₹20,032</span>
        </div>
        <div className="price-detail flex justify-between text-black">
          <p>Delivery Charges:</p>
          <span className="text "><span className="line-through"> ₹40</span> <span className="text-green-600 ">Free</span></span>
        </div>
        <hr />
        <div className="price-detail flex justify-between text-black text-xl">
          <p>Total Amount:</p>
          <span className="text">₹39,416</span>
        </div>
        <hr />
        <div className="price-detail flex justify-between text-green-600">
          <p>You will save ₹20,032  on this order</p>
        </div>
      </div>
    </div>
  );
}

export default PriceDetails;
