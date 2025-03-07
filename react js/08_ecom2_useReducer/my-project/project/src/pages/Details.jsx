import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router";

import BackBtn from "../components/Button/BackBtn";
import { useCart, useDispatchCart } from "../context/cartContext";
import { toast } from "react-toastify";

function Details() {
  let [products, setProducts] = useState(null);
  let {cartItems}=useCart()
  let dispatch=useDispatchCart()


  let navigate = useNavigate();

  const [URLSearchParams] = useSearchParams();

  useEffect(() => {
    const productId = URLSearchParams.get("productId");

    getProductById(Number(productId));
  }, []);

  async function getProductById(productId) {
    try {
      const response = await fetch("/public/sample.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();

      const product = data.find((product) => product.id == productId);

      setProducts(product);
    } catch (error) {
      console.error("Error in fetch product", error);
    }
  }

  function addToCart(cart) {
    toast.success("Item Added to Cart !");
    // setCartItems((prevItems) => [...prevItems, { ...cart, quantity: 1 }]);
    if (cart) {
      
      dispatch({type:"addCart",payload:cart})
      navigate("/cart");
    }
  }

  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center relative">
      <BackBtn position=" left" />
      {products ? (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-shrink-0">
              <img
                className="w-full h-64 object-cover md:w-64 md:h-full"
                src={products.image}
                alt={products.name}
              />
            </div>
            <div className="p-8 flex-1">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {products.title}
              </div>
              <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                {products.name}
              </h1>
              <p className="mt-2 text-gray-500">
                {products.description.slice(0, 190)}...
              </p>
              <p className="mt-2 text-gray-900 font-bold text-2xl">
                ${products.price}
              </p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-500">
                  {"★".repeat(Math.round(products.rating.rate))}
                  {"☆".repeat(5 - Math.round(products.rating.rate))}
                </span>
                <span className="ml-2 text-gray-600">
                  ({products.rating.count} reviews)
                </span>
              </div>
              {cartItems.some((cart) => cart.id === products.id) ? (
                <NavLink to={"/cart"}>
                  <button className="bg-orange-700 text-white px-3 py-2 rounded-lg hover:bg-orange-500 mt-4">
                    Go to Cart
                  </button>
                </NavLink>
              ) : (
                <button
                  className="bg-indigo-700 text-white px-3 py-2 rounded-lg hover:bg-teal-500 mt-4"
                  onClick={() => addToCart(products)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Details;
