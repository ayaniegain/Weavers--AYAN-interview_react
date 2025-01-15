import React, { useState } from "react";
import { useEffect } from "react";

function HandleShowPage() {
  let [showCart, setShowCart] = useState(false);
  let [showHome, setShowHome] = useState(true);

  function showHomeFunc() {
    setShowCart(false);
    setShowHome(true);
  }

  function showCartFunc(showCartBtn) {
    setShowCart(showCartBtn);
    setShowHome(false);
  }

  return {
    showHomeFunc,
    showCartFunc,
    showCart,
    showHome,
    setShowCart,
    setShowHome,
  };
}

export default HandleShowPage;
