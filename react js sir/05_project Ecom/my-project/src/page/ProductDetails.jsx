import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function ProductDetails({ product,handleCartItems,showCartFunc,showHomeFunc,cartItems }) {

  let [showCartBtn,setShowCartBtn]=useState(false)
  const {
    id,
    title,
    description,
    price,
    tags,
    warrantyInformation,
    shippingInformation,
    reviews,
    returnPolicy,
    images,
    rating
  } = product;

  function handleActionBtn(){

    handleCartItems(product)
    setShowCartBtn(true)
     toast("new product added to cart");
  } 

  function gotoCart(){

    showCartFunc(true)
  }

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row relative">
              <ToastContainer/>
      <button
          className="absolute top-4 left-4 tooltip  tooltip-right rounded-full p-2 bg-gray-700 hover:bg-gray-300"
          data-tip="home"

          onClick={showHomeFunc}
        >
          ←
        </button>
        <section className="flex flex-col items-center md:w-1/2">
          <div className="mb-4">
            <img src={images} alt={id} className="h-80 w-full object-cover rounded-lg shadow-lg"/>
          </div>
        <div>
          {cartItems.some((cart) => cart.id === id) ? (
            <button className="bg-orange-700 text-white px-3 py-2 rounded-lg hover:bg-orange-500" onClick={gotoCart}>
              Go to Cart
            </button>
          ) : (
            !showCartBtn && (
              <button className="bg-teal-900 text-white px-3 py-2 rounded-lg hover:bg-teal-500" onClick={handleActionBtn}>
                Add to Cart
              </button>
            )
          )}
        </div>
        </section>
        <section className="md:w-1/2 md:pl-4 md:pt-6">
          <h1 className="text-2xl font-bold mb-2 text-teal-900">{title}</h1>
          <span className="text-gray-500 mb-2 block">{tags.join(", ")}</span>
          <p className="text-xl font-semibold text-green-600 mb-2">${price}</p>
          <div className="mb-2">
            <span className="font-bold text-teal-700">Delivery: </span>{shippingInformation}
          </div>
          <div className="mb-2">
            <span className="font-bold text-teal-700">Description: </span>{description}
          </div>
          <div className="mb-2">
            <span className="font-bold text-teal-700">Warranty: </span>{warrantyInformation}
          </div>
          <div className="mb-2">
            <span className="font-bold text-teal-700">Return Policy: </span>{returnPolicy}
          </div>
        </section>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
        <p className="text-xl font-bold mb-2 text-gray-500 text-center">Rating & Reviews</p>
        <p className="text-lg font-semibold mb-2 text-center">Rating: <span className="bg-green-700 p-1 text-white rounded-lg">{rating}</span></p>
        {
          reviews.map((review, index) => (
            <div key={index} className="border-t pt-2 mt-2 text-center">
              <p className="font-bold text-teal-900 ">{review.reviewerName}</p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">Rating: {review.rating}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductDetails;
