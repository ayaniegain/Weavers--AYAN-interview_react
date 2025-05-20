import React from 'react'

function ProductList({ id, title, body,addToCart }) {
    return (
        <div className="max-w-sm   m-auto h-80 bg-white shadow-md overflow-hidden rounded-2xl border-2 border-blue-500 p-6 mb-6">
            <p className="text-sm text-gray-500 mb-1">Product ID: {id}</p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
            <p className="text-gray-600 mb-4">{body.slice(0,500)}...</p>
            <button onClick={()=>addToCart({id,title})} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Show
            </button>
        </div>
    )
}

export default ProductList
