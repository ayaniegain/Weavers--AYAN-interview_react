import React from 'react';
import CartItems from '../cart/CartItems';

function CartPage({ cartItem }) {

  let price = cartItem.reduce((curr, all) => {
    return curr + Number(all.price);
  }, 0);

  const deliveryCharges = 12;
  const totalAmount = price + deliveryCharges;

  console.log(totalAmount);

  return (
    <div className="container mx-auto p-4">
      <p className="text-xl font-bold">Cart Page</p>
      <span className="text-sm">No of items: {cartItem.length}</span>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full md:w-2/3">
          {cartItem.map((item) => {
            const { price, img, details, originalPrice, title, quantity, id } = item;
            return (
              <div key={id} className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="w-full md:w-1/2">
                  <CartItems quantity={quantity} title={title} price={price} originalPrice={originalPrice} img={img} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/3 md:ml-4">
          <div className="bg-white shadow-md rounded-lg p-4 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="mb-2 flex justify-between">
              <span>Price:</span>
              <span>${price}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Delivery Charges:</span>
              <span>${deliveryCharges}</span>
            </div>
            <div className="mb-4 flex justify-between font-bold">
              <span>Total Amount:</span>
              <span>${totalAmount}</span>
            </div>
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
