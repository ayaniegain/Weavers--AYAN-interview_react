import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import BackBtn from "../components/Button/BackBtn";
import { useCart, useDispatchCart } from "../context/cartContext";
import { Link, NavLink, Outlet } from "react-router";

function Cart() {
  let { cartItems, showCartDetails } = useCart();
  let dispatch = useDispatchCart();
console.log(cartItems)
  // const itemIncandDec = (action, id) => {
  //   setCartItems((prevItems) =>prevItems.map((item) =>item.id === id? {...item,quantity:action === "inc"? item.quantity + 1: Math.max(item.quantity - 1, 1),}: item));};

  const deleteItemFunc = (id) => {
    toast.warn("item deleted !");
    dispatch({ type: "removeFromCart", payload: id });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let deliveryCharge;

  cartItems.length > 0 ? (deliveryCharge = 5) : (deliveryCharge = 0);

  useEffect(() => {
    showCartDetails(totalPrice, cartItems.length, deliveryCharge);
  }, [cartItems]);

  return (
    <div className="container mx-auto p-4 min-h-screen relative ">
      <BackBtn position="right" />

      <p className="text-xl font-bold mt-2 text-center">CART PAGE</p>
      <span className="text-sm ">No of items: {cartItems.length}</span>
      <div className="flex flex-col md:flex-row mt-4 gap-4">
        {/* Cart Items Section */}
        <div className="w-full md:w-2/3">
          {cartItems.map((item) => {
            const { price, image, title, quantity, id } = item;
            const formattedPrice = parseFloat(price).toFixed(2);

            return (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.3)]  rounded-lg p-4 mb-4"
              >
                <img
                  src={image}
                  alt="Product"
                  className="w-20 h-20 object-fill rounded-md mr-4"
                />
                <div className="flex flex-col md:flex-row w-full justify-between">
                  {/* Product Info */}
                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold">
                      {title.slice(0, 20)}
                    </h2>
                    <p className="text-gray-700">${formattedPrice}</p>
                  </div>
                  {/* Quantity Controls */}
                  <div className="flex items-center mt-4 md:mt-0">
                    <button
                      onClick={() => dispatch({ type: "DecQty", payload: id })}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      onClick={() => dispatch({ type: "IncQty", payload: id })}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  {/* Price and Delete */}
                  <div className="flex flex-col items-end">
                    <p className="text-gray-700">
                      Total: ${(formattedPrice * quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => deleteItemFunc(id)}
                      className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Price Details Section */}
        <div className="w-full md:w-1/3">
          <div className="bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.3)]  rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="mb-2 flex justify-between">
              <span>Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Delivery Charges:</span>
              <span>${deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="mb-4 flex justify-between font-bold">
              <span>Total Amount:</span>
              <span>${(totalPrice + deliveryCharge).toFixed(2)}</span>
            </div>
              <Link to={"payment"}>
            <button  className="w-full py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              
             CHECKOUT
            </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
