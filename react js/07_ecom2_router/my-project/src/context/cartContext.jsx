import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export let CartListContext = createContext(null);

let CartContext = ({ children }) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [cartDetails, setCartDetails] = useState({});

  function addToCart(cart) {
    let duplicateItemFound = cartItems.find((item) => item.id === cart.id);

    if (duplicateItemFound) {
      toast.warn("duplicate item found");
    } else {
      toast.success("Item Added to Cart !");
      setCartItems((prevItems) => [...prevItems, { ...cart, quantity: 1 }]);
      navigate("/cart");
    }
  }
  
  function showCartDetails(totalPrice,Cartlength,deliveryCharge) {
    setCartDetails({totalPrice,Cartlength,deliveryCharge})
  }

  return (
    <>
      <ToastContainer />
      <CartListContext.Provider value={{ cartItems, setCartItems, addToCart,showCartDetails,cartDetails }}>
        {children}
      </CartListContext.Provider>
    </>
  );
};

export default CartContext;
