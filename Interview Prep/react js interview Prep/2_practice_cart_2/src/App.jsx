import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {

  const [cart,setCart]=useState([])

function addToCart(item){


  setCart((prev)=>[...prev,item])

}

  return (
    <div className="relative p-10 min-h-screen  bg-gray-300">
      <div className="fixed text-center pt-2 mt-10 top-0 right-10 bg-white  border-1 w-80">
        <Cart cart={cart}/>
      </div>
      <div className="flex  ">

      <Products addToCart={addToCart}/>
      </div>
    </div>
  );
}

export default App;
