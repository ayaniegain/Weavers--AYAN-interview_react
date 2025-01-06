import { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (price, action) => {
    if (action === null) {
      setTotalPrice((totalPrice) => totalPrice + price);
    } else if (action === "inc") {
      setTotalPrice((totalPrice) => totalPrice + price);
    } else if (action === "dec") {
      setTotalPrice((totalPrice) => totalPrice - price);
    }
  };

  return (
    <>
      <div className="text-red-700 font-bold text-center text-3xl py-4">
        Final Bill : {totalPrice}
      </div>

      <div className="flex space-x-6 items-center justify-center py-20">
        <Items price={200} calculateTotalPrice={calculateTotalPrice} />
        <Items price={100} calculateTotalPrice={calculateTotalPrice} />
        <Items price={400} calculateTotalPrice={calculateTotalPrice} />
        <Items price={300} calculateTotalPrice={calculateTotalPrice} />
      </div>
    </>
  );
}

export default App;
