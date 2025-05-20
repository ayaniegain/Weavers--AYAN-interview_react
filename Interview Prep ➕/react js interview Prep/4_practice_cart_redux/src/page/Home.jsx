import React from "react";
import { useGetProduct } from "../context/FetchAllProductContext";
import ItemContainer from "../components/ItemContainer";
import Header from "../components/Header";

function Home() {
  let { data: product, error, loading } = useGetProduct();

  return (
    <div className="container mx-auto p-4">
      <ItemContainer productStatus={{ product, error, loading }} />
    </div>
  );
}

export default Home;
