import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCart, deleteCart } from '../REDUX/product.slice';

function Cart() {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllCart());
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow rounded p-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.images?.[0] || item.thumbnail}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-green-600 font-bold">${item.price}</div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={handleDeleteAll}
            className="w-full bg-orange-400 text-white py-2 rounded mt-4 hover:bg-red-800"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart