import React, { useState, useEffect } from "react";
import Items from "../components/items/Items";
import Pagination from "../components/pagination/Pagination";
import CountDownTimer from "../hooks/CountDownTimer";
import HomeShimmer from "../components/LoadingEffect/Home.shimmer";

function ProductPage({ products = [], handleGetProductId = 1 }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Simulate a delay to fetch products
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-row z-0 relative md:pt-0 pt-10">
      <button
        className="md:hidden p-4 bg-teal-950 h-10 w-10 absolute top-0 left-0"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        className={`bg-gradient-to-r from-cyan-800 to-teal-600  md:w-[15%] w-[100%] h-screen md:h-auto flex flex-col pt-4 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-20 fixed md:relative`}
      >
        <div className="md:px-4 z-10">
          <h2 className="font-bold text-white text-xl">FILTERS</h2>
          <hr className="my-2" />
          <h4 className="font-bold text-white text-xl">Price</h4>
          <hr className="my-2" />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full items-center relative ">
        <CountDownTimer />
        <div className="flex flex-wrap justify-center p-8 gap-4">
          {loading ? (
            <HomeShimmer />
          ) : (
            products.map((product) => (
              <Items key={product.id} product={product} handleGetProductId={handleGetProductId} />
            ))
          )}
        </div>

        <div className="mt-4">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
