import React from "react";
import Cart from "./components/cart/Cart";
import "./App.css";
import data from "./data/data.json";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";

function App() {
  let { laptops } = data;
  return (
    <div>
      <Header/>
    <div className="container">
      <Cart laptops={laptops} />
    </div>
    <Footer/>
    </div>
  );
}

export default App;

