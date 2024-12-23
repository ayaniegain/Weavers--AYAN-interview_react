import React from "react";
import Cart from "./components/cart/Cart";
import "./App.css";
import data from "./data/data.json";

function App() {
  let { laptops } = data;
  return (
    <>
      <Cart laptops={laptops} />
    </>
  );
}

export default App;
