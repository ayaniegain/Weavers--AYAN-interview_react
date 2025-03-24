import React, { useEffect, useState } from "react";

function Items({ price, calculateTotalPrice }) {
  let [quantity, setQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(price);
  const [action, setAction] = useState(null);

  useEffect(() => {
    setItemPrice(quantity * price);
    calculateTotalPrice(price, action);
  }, [quantity, price]);

  function inc() {
    setQuantity((quantity) => quantity + 1);
    setAction("inc");
  }

  function dec() {
    setQuantity((quantity) => quantity - 1);
    setAction("dec");
  }

  return (
    <div className="flex flex-col justify-between items-center w-52 h-52 bg-slate-200 py-4">
      <div className="text-orange-600 font-bold text-center text-2sm py-4">
        Total Price : {itemPrice}
      </div>

      <p className="text-green-700 text-xl">Quantity {quantity}</p>

      <div className="space-x-8 ">
        <button className="h-8 w-8  text-2xl bg-orange-500" onClick={dec}>
          -
        </button>
        <button className="h-8 w-8  text-2xl bg-orange-500" onClick={inc}>
          +
        </button>
      </div>
      <p className="text-blue-700">MRP: {price}</p>
    </div>
  );
}

export default Items;
