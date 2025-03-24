import React, { useEffect, useState } from "react";
import { useGetProduct } from "../../context/fetchProduct";

function Search() {
  const [searchText, setSearchText] = useState("");
  const { products, setProducts, allProducts } = useGetProduct(); // Get original product list

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    if (searchText.trim() === "") {
      setProducts(allProducts); // Reset to full product list when search is empty
    } else {
      let filteredProducts = allProducts.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }, [searchText]);

  return (
    <div className="relative  max-w-md mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onChange={handleChange}
      />

      {/* Search Results Dropdown */}
      {searchText && products.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg max-h-60 overflow-y-auto z-10">
          {products.map((p, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-indigo-100 transition-all cursor-pointer"
            >
              {p.title}
            </li>
          ))}
        </ul>
      )}

      {/* No Results Found */}
      {searchText && products.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-3 text-gray-600 text-center">
          No products found.
        </div>
      )}
    </div>
  );
}

export default Search;
