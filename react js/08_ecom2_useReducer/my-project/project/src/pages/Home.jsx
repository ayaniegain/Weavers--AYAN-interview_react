import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HomeShimmer from "../components/LoadingEffect/Home.shimmer";

function Home() {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/api/v1", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error in fetch product", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function productDetails(productId) {
    navigate(`/details?productId=${productId}`);
  }

  return (
    <main className="min-h-screen flex flex-wrap gap-2 justify-center bg-slate-200 p-4">
      {products.length === 0 ? (
        <HomeShimmer/>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-80 shadow-md m-2 flex-shrink-0">
            <p className="font-semibold rounded-lg text-white text-left pl-8 bg-red-500 h-7 w-40">
              {product.category}
            </p>
            <figure>
              <img src={product.image} alt={product.title} className="h-48 w-full object-contain p-2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-md">{product.title.slice(0, 28)}...</h2>
              <div className="flex items-center">
                <p className="text-teal-800 font-semibold text-2xl">${product.price}</p>
                {Array(Math.floor(product.rating.rate))
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                <p className="text-orange-700 ml-2">{product.rating.rate}</p>
              </div>
            </div>
            <div className="card-actions justify-center pb-2">
              <button className="btn btn-success text-white" onClick={() => productDetails(product.id)}>
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
