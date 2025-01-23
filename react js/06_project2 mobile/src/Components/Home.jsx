import React, { useEffect, useState } from "react";

import data from "../data/data";
import ProductPage from "./page/ProductPage";
import ProductDetailsPage from "./page/ProductDetailsPage";
import CartPage from "./page/CartPage";
import Footer from "./Navbar/Footer";
import Header from "./Navbar/Header";

function Home() {
  let [showProductDetailsPage, setShowProductDetails] = useState(false);
  let [productDetailsPageData, setProductDetailsPageData] = useState(null);
  let [showCartPage, setShowCartpage] = useState(false);
  let [cartItem, setCartItem] = useState([]);
  let [cartItemCount, setCartItemCount] = useState(0);

  function productDetailsAdd(product, action) {
    setShowProductDetails(action);
    setProductDetailsPageData(product);
  }
  function cartDetailsAdd(item, action) {
    setShowCartpage(action);

    let existingItem = cartItem.find((citem) => citem.id === item.id);
    if (existingItem) {
      console.log("Item already in cart");
    } else {
      setCartItem([...cartItem, {...item}]);
    }
  }
  function gotoHome(action) {
    setShowProductDetails(action);
    setShowCartpage(false);
  }
  function gotoCart(action) {
    setShowCartpage(action);
  }

  function cartItemCountFunc() {
    setCartItemCount(cartItem.length);
  }
  useEffect(() => {
    cartItemCountFunc();
  }, [cartItem]);

  function itemIncandDec(action, id) {
    if (action === "dec") {
      let res = cartItem.find((item) => item.id === id);
      if (res && res.quantity > 1) {
        res.quantity -= 1;
        setCartItem([...cartItem]);
      }
    }
    if (action === "inc") {
      let res = cartItem.find((item) => item.id === id);
      if (res) {
        res.quantity += 1;
        setCartItem([...cartItem]);
      }
    }
  }

  function deleteItemFunc(id) {
    let res = cartItem.filter((item) => item.id !== id);
    if (res) {

      setCartItem(res);
    }

    // if (cartItem.length === 0) {

    //   console.log("first")
    //   setCartItem([{ ...cartItem, quantity: 0 }]);

    // }
  }
  // console.log(cartItem);

 

  return (
    <>
      <Header
        gotoHome={gotoHome}
        gotoCart={gotoCart}
        cartItemCount={cartItemCount}
      />

      <div className="h-[100vh] bg-slate-200">
        {!showCartPage ? (
          showProductDetailsPage ? (
            <div>
              <ProductDetailsPage
                productDetailsPageData={productDetailsPageData}
                cartDetailsAdd={cartDetailsAdd}
              />
            </div>
          ) : (
            <div className="grid grid-cols-3">
              {data.map((products) => (
                <ProductPage
                  product={products}
                  key={products.id}
                  productDetailsAdd={productDetailsAdd}
                />
              ))}
            </div>
          )
        ) : (
          <div>
            <CartPage
              cartItem={cartItem}
              itemIncandDec={itemIncandDec}
              deleteItemFunc={deleteItemFunc}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
