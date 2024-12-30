import React from "react";
import Address from "../components/Address/Address";
import PriceDetails from "../components/priceSection/PriceDetails";
import Items from "../components/Cart/Items";
import OrderButton from "../components/Button/OrderButton";
function CartPage() {
  return (
    <div className="h-auto bg-slate-200 flex gap-4">
      <div className="cart-section w-[65%] py-10 ml-24">
        <div className="address w-full bg-white rounded">
          <Address />
        </div>
        <div className="cart mt-5 bg-white h-auto">
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </div>
        <div className="h-20 bg-white flex items-center justify-end px-10 font-bold sticky bottom-0 z-10 border-t border-t-gray-300">
          <OrderButton/>
        </div>
      </div>
      <div className="price-section w-[35%] pt-10">
        <PriceDetails />
      </div>
    </div>
  );
}

export default CartPage;

