import React, { useState } from "react";

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

  function productDetailsAdd(product, action) {
    setShowProductDetails(action);
    setProductDetailsPageData(product);
  }
  function cartDetailsAdd(item, action) {
    setShowCartpage(action);
    setCartItem([...cartItem, item]);
  }
  function gotoHome(action) {
    setShowProductDetails(action);
    setShowCartpage(false);
  }
  function gotoCart(action) {
    setShowCartpage(action);
  }
  return (
    <>
      <Header gotoHome={gotoHome} gotoCart={gotoCart} />

      <div className="h-min-screen bg-slate-200">
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
            <CartPage cartItem={cartItem} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
