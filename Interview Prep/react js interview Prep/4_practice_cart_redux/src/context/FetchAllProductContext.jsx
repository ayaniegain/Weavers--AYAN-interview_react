import React, { createContext, useContext, useEffect, useState } from "react";
import MOCK_DATA from "../mockData/mockData.json";

export let ProductContext = createContext();

function FetchAllProductContext({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(false);

  async function getAllProduct() {
    try {
      //    let response=await fetch("https://fakestoreapi.com/products")
      //    let data= await response.json()
      // setData(data)

      setData(MOCK_DATA);

      if (!MOCK_DATA) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(true);
      setEror(error);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ data, error, loading }}>
      {children}
    </ProductContext.Provider>
  );
}

export default FetchAllProductContext;

export function useGetProduct() {
  return useContext(ProductContext);
}
