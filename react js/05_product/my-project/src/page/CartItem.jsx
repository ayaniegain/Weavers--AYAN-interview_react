import React, { useState, useEffect } from "react";

function CartItem({
  title,
  price,
  shippingInformation,
  pid,
  images,
  brand,
  calculateTotalPrice,
  handleDeleteCart,
}) {
  // let [itemPrice, setItemPrice] = useState(price);
  let [quantity, setQuantity] = useState(1);
  let [action, setAction] = useState(null);

console.log(price)

  useEffect(() => {
    // setItemPrice(quantity * price);
    calculateTotalPrice(price, action);

  }, [quantity]);

  function handleInc() {
    setQuantity((quantity) => quantity + 1);
    // calculateTotalPrice(price, action);
    setAction("inc");
  }

  function handleDec() {
    // calculateTotalPrice(price, action);

   quantity<=1?setQuantity(1) : setQuantity((quantity) => quantity - 1);
    setAction("dec");
  }

  return (
    <div>
      <ul className="flex justify-between items-center border-b pb-2 mb-2">
        <li className="w-1/4 flex items-center">
          <div className="flex-col md:flex items-center">
            <img src={images} alt="" className="w-16 h-16 mr-4" />
            <aside>
              <p className="font-semibold">{title}</p>
              <p className="text-gray-500">{brand}</p>
              <p className="text-gray-500">{shippingInformation}</p>
            </aside>
          </div>
        </li>
        <li className="w-1/4">${price.toFixed(2)}</li>
        <li className="w-1/4 flex items-center">
          <div className="flex items-center">
            <button className="px-2 py-1 bg-gray-200 " onClick={handleDec}>
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="px-2 py-1 bg-gray-200" onClick={handleInc}>
              +
            </button>
          </div>
        </li>
        <li className="w-1/4">${(quantity*price).toFixed(2)}</li>
        <button
          className="text-orange-400 text-xl"
          onClick={() => handleDeleteCart(pid)}
        >
          delete{" "}
        </button>
      </ul>
    </div>
  );
}

export default CartItem;
