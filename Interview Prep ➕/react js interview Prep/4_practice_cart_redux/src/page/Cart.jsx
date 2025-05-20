import React, { useEffect, useState } from "react";
import {
  decQty,
  incQty,
  removeCartItem,
  useCartFunction,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  let dispatch = useDispatch();
  let item = useCartFunction();

  let [finalCartPrice, setFinalCartPrice] = useState(0);

  function finalAmount() {
    return item.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  useEffect(() => {
    setFinalCartPrice(finalAmount());
  }, [item]);

  if (item.length <= 0) {
    return (
      <h2 className="text-center text-red-500 text-2xl font-bold mt-10">
        No Cart Available
      </h2>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Final Amount in Cart: <span className="text-green-600">${finalCartPrice}</span>
      </h2>
      {item &&
        item.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image || "https://via.placeholder.com/100"}
                alt={product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h1 className="text-lg font-bold">{product.title}</h1>
                <h1 className="text-gray-700">
                  Total: <span className="text-green-600">${product.quantity * product.price}</span>
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={() => dispatch(incQty(product.id))}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                +
              </button>
              <span className="font-semibold">Quantity: {product.quantity}</span>
              <button
                onClick={() => dispatch(decQty(product.id))}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                -
              </button>
            </div>

            <button
              onClick={() => dispatch(removeCartItem(product.id))}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors w-full"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Cart;
