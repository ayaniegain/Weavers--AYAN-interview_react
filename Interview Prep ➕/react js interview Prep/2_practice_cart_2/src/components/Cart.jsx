import React from "react";

function Cart({ cart }) {
    if (cart.length < 1) {
        return <h2 className="text-center text-xl font-semibold text-gray-500">Loading...</h2>;
    }

    return (
        <div className="p-4 ">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Cart Items</h1>
            <div className="space-y-4 h-64 overflow-y-scroll">
                {cart &&
                    cart.map(({ id, title }, index) => (
                        <div
                            key={id}
                            className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50"
                        >
                            <p className="text-lg text-gray-700">
                                {index + 1}. {title}
                            </p>
                            <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Cart;
