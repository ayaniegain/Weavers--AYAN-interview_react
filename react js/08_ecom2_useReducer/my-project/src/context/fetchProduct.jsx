import React, { createContext, useContext, useEffect, useState } from "react";
let ProductContex = createContext([]);

function FetchProductContext({ children }) {
  let [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
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
      setAllProducts(data);
    } catch (error) {
      console.error("Error in fetch product", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContex.Provider value={{ products, setProducts,allProducts  }}>
      {children}
    </ProductContex.Provider>
  );
}

export default FetchProductContext;

export function useGetProduct() {
  return useContext(ProductContex);
}
