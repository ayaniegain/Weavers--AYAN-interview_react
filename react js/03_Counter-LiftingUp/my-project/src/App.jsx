import { useContext } from "react";
import "./App.css";
import Items from "./components/Items";
import { CounterContext } from "./context/ValueProvider";

function App() {
  const { totalPrice } = useContext(CounterContext);

  return (
    <>
      <div className="text-red-700 font-bold text-center text-3xl py-4">
        Final Bill : {totalPrice}
      </div>

      <div className="flex space-x-6 items-center justify-center py-20">
        <Items price={200} />
        <Items price={100} />
        <Items price={400} />
        <Items price={300} />
      </div>
    </>
  );
}

export default App;
