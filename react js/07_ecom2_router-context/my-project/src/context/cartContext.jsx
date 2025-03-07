import React, { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";

export let CartListContext = createContext(null);

let CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartDetails, setCartDetails] = useState({});

 
  
  function showCartDetails(totalPrice,Cartlength,deliveryCharge) {
    setCartDetails({totalPrice,Cartlength,deliveryCharge})
  }

  return (
    <>
      <ToastContainer />
      <CartListContext.Provider value={{ cartItems, setCartItems,showCartDetails,cartDetails }}>
        {children}
      </CartListContext.Provider>
    </>
  );
};

export default CartContext;
