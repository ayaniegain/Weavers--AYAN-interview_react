import NavMain from "./components/navbar/NavMain";
import ProductPage from "./page/Product.Page";
import productsList from "./data/sample.data.json";
import ProductDetails from "./page/ProductDetails";
import Cartpage from "./page/Cartpage";
import { useState } from "react";
import HandleShowPage from "./hooks/HandleShowPage";
import Header from "./components/navbar/Header";

export default function App() {
  let [chooseProduct, setChooseproduct] = useState(null);
  let [cartItems, setCartItems] = useState([]);
  let [subTotal, setSubtotal] = useState(0);
 
  let {showHomeFunc,showCartFunc,showCart,showHome,setShowCart,setShowHome}= HandleShowPage()


  function handleGetProductId(id) {
    setChooseproduct(productsList.products.find((prod) => prod.id === id));
    setShowHome(false);

  }

  function handleCartItems( product ) {
    setCartItems([...cartItems, product]);
  }

 
  function subTotalPassToheader(value){
    setSubtotal(value)


  }

  function handleDeleteCart(cartId){

    if (cartItems) {

      setCartItems(cartItems.filter((cart)=>cart.id !==cartId));
      
    }


  }


  return (
    <NavMain >
      <Header showHomeFunc={showHomeFunc} showCartFunc={showCartFunc} cartItems={cartItems} subTotal={subTotal}/>
      {showHome ? (
        <ProductPage
          products={productsList.products}
          handleGetProductId={handleGetProductId}
        />
      ) : (
        !showCart && (
          <ProductDetails
            product={chooseProduct}
            handleCartItems={handleCartItems}
            showCartFunc={showCartFunc}
            showHomeFunc={showHomeFunc}
            cartItems={cartItems}
          />
        )
      )}
      {showCart && <Cartpage cartItems={cartItems} showHomeFunc={showHomeFunc} subTotalPassToheader={subTotalPassToheader} handleDeleteCart={handleDeleteCart}/>}
    <div>
      
    </div>

    </NavMain>
  );
}
