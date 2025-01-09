import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

function ValueProvider({ children }) {
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
    <CounterContext.Provider value={{ totalPrice, calculateTotalPrice }}>
      {children}
    </CounterContext.Provider>
  );
}

export default ValueProvider;