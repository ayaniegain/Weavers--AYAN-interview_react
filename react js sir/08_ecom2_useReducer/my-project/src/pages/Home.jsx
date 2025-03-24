import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HomeShimmer from "../components/LoadingEffect/Home.shimmer";
import LoadingPage from "../components/LoadingEffect/LoadingPage";
import { useGetProduct } from "../context/fetchProduct";

function Home() {
  let navigate = useNavigate();
  let {products}= useGetProduct()

 
  function productDetails(productId) {
    navigate(`/details?productId=${productId}`);
  }

  return (
    <main className="min-h-screen flex flex-wrap gap-2 justify-center bg-slate-200 p-4">
      {products.length === 0 ? (
        // <HomeShimmer/>
        <LoadingPage/>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-80 shadow-md m-2 flex-shrink-0  hover:bg-yellow-50">
            <p className="font-semibold rounded-lg text-white text-left pl-8 bg-pink-500 h-7 w-40">
              {product.category}
            </p>
            <figure >
              <img src={product.image} alt={product.title} className="h-48 w-full object-contain p-2" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-1sm">{product.title.slice(0, 40)}...</h2>
              <div className="flex items-center">
                <p className="text-cyan-700  font-extrabold text-2xl">${product.price}</p>
                {Array(Math.floor(product.rating.rate))
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                <p className="text-orange-700 ml-2">{product.rating.rate}</p>
              </div>
            </div>
            <div className="card-actions justify-center pb-2">
              <button className="btn bg-teal-800 hover:bg-indigo-600 text-white" onClick={() => productDetails(product.id)}>
                DETAILS
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  );
}

export default Home;
