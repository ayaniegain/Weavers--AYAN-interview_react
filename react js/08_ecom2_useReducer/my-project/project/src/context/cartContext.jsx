import React, { createContext, useContext, useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";

export let CartListContext = createContext(null);
export let CartDispatchContext = createContext(null);

let CartContext = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [cartDetails, setCartDetails] = useState({});

  let initial = [];
  const [cartItems, dispatch] = useReducer(cartReducer, initial);

  function cartReducer(cart, action) {
    switch (action.type) {
      case "addCart": {
        return [...cart, { ...action.payload, quantity: 1 }];
      }
      case "IncQty": {
        return cart.map((cart) => {
          if (cart.id == action.payload) {
            cart.quantity++;
            return cart;
          }
        });
      }
      case "DecQty": {
        return cart.map((cart) => {
          if (cart.id == action.payload) {

            cart.quantity <=1 ? 1: cart.quantity-- 

            return cart;
          }else{
            return cart
          }
        });
      }
      case "removeFromCart": {
        return cart.filter((cart) => cart.id !== action.payload);
      }
    }
  }

  function showCartDetails(totalPrice, Cartlength, deliveryCharge) {
    setCartDetails({ totalPrice, Cartlength, deliveryCharge });
  }

  return (
    <>
      <ToastContainer />
      <CartListContext.Provider
        value={{ cartItems, showCartDetails, cartDetails }}
      >
        <CartDispatchContext.Provider value={dispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartListContext.Provider>
    </>
  );
};

export default CartContext;

export function useCart() {
  return useContext(CartListContext);
}

export function useDispatchCart() {
  return useContext(CartDispatchContext);
}
