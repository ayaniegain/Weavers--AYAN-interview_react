import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import BackBtn from "../components/Button/BackBtn";
import { CartListContext } from "../context/cartContext";

function Details() {
  let [products, setProducts] = useState(null);
  let { addToCart } = useContext(CartListContext);

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
              <button
                onClick={() => addToCart(products)}
                className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300"
              >
                Add To Cart
              </button>
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
