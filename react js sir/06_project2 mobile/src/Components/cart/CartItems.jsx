import { useEffect } from 'react';

function CartItems({ quantity, title, price, originalPrice, img, itemIncandDec, id, deleteItemFunc, updateTotalAmount }) {
  const totalPrice = price * quantity;

  useEffect(() => {
    updateTotalAmount((prevAmount) => prevAmount + totalPrice);
    return () => {
      updateTotalAmount((prevAmount) => prevAmount - totalPrice);
    };
  }, [quantity]);

  return (
    <div className="cart-item flex flex-col md:flex-row md:space-x-60 w-full items-center justify-between p-5 border-b border-gray-200">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={img} alt="Product" className="cart-item-image w-20 h-20 object-cover mr-4" />
        <div className="cart-item-details">
          <h2 className="cart-item-title text-md font-semibold w-40">{title}</h2>
          <p className="cart-item-price text-gray-700">${price}</p>
        </div>
      </div>
      <div className="cart-item-quantity flex items-center mb-4 md:mb-0">
        <button onClick={() => itemIncandDec('dec', id)} className="quantity-button bg-gray-200 text-gray-700 px-2 py-1 rounded">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={() => itemIncandDec('inc', id)} className="quantity-button bg-gray-200 text-gray-700 px-2 py-1 rounded">+</button>
      </div>
      <div className="cart-item-actions flex flex-col items-end mt-2 md:mt-0">
        <div className="cart-item-total-price">
          <p className="text-gray-700">Total: ${totalPrice}</p>
        </div>
        <button onClick={() => deleteItemFunc(id)} className="delete-button bg-red-500 text-white px-2 py-1 rounded mt-2">Delete</button>
      </div>
    </div>
  );
}

export default CartItems;