import React from "react";

function PriceDetails({ priceDetails }) {
  const { deliveryCharges, discount, savings, subTotal, totalAmount } =
    priceDetails;

  return (
    <div className="pr-44 fixed bottom-13 z-10">
      <div className="group container bg-white h-80 flex flex-col gap-4 p-6 ">
        <p className="font-bold">PRICE DETAILS</p>
        <hr />
        <div className="price-detail flex justify-between text-black">
          <p>Price (3 items):</p>
          <span className="text">₹{subTotal}</span>
        </div>
        <div className="price-detail flex justify-between text-black">
          <p>Discount:</p>
          <span className="text text-green-600">- ₹{discount}</span>
        </div>
        <div className="price-detail flex justify-between text-black">
          <p>Delivery Charges:</p>
          {deliveryCharges > 0 ? (
            <span className="text ">
              <span> ₹{deliveryCharges}</span>{" "}
            </span>
          ) : (
            <span className="text ">
              <span className="line-through"> ₹40</span>{" "}
              <span className="text-green-600 ">Free</span>
            </span>
          )}
        </div>
        <hr />
        <div className="price-detail flex justify-between text-black text-xl">
          <p>Total Amount:</p>
          <span className="text">₹{totalAmount}</span>
        </div>
        <hr />
        <div className="price-detail flex justify-between text-green-600">
          <p>You will save ₹{savings} on this order</p>
        </div>
      </div>
    </div>
  );
}

export default PriceDetails;
