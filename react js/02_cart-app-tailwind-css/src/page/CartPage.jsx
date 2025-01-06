import React, { useEffect, useState } from "react";
import Address from "../components/Address/Address";
import PriceDetails from "../components/priceSection/PriceDetails";
import Items from "../components/Cart/Items";
import OrderButton from "../components/Button/OrderButton";
function CartPage({ cartData }) {
  const [items, setItems] = useState(cartData.cart.items);
  const [price, setPrice] = useState(cartData.cart.priceDetails);

  useEffect(() => {
    calculatePriceDetails();
  }, [items]);

  let calculatePriceDetails = () => {
    const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = items.reduce((acc, item) => acc + (item.originalPrice - item.price) * item.quantity, 0);
    const deliveryCharges = items.some(item => item.delivery.charges > 0) ? 40 : 0;
    const totalAmount = subTotal - discount + deliveryCharges;
    const savings = discount;

    setPrice({ subTotal, discount, deliveryCharges, totalAmount, savings });
  };



  let onUpdate=(proditem)=>{

    console.log(items.map((item) => item.productId == proditem.productId))

    setItems(items.map((item) => item.productId == proditem.productId?proditem : item));

  }

  let onRemove = (id) => {
    setItems(items.filter((item) => item.productId !== id));
  };
// console.log(items)
  return (
    <div className="h-auto bg-slate-200 flex gap-4">
      <div className="cart-section w-[65%] py-10 ml-24">
        <div className="address w-full bg-white rounded">
          <Address />
        </div>
        <div className="cart mt-5 bg-white h-auto">
          {items.map((item) => (
            <Items
              item={item}
              key={item.productId}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))}
        </div>
        <div className="h-20 bg-white flex items-center justify-end px-10 font-bold sticky bottom-0 z-10 border-t border-t-gray-300">
          <OrderButton />
        </div>
      </div>
      <div className="price-section w-[35%] pt-10">
        <PriceDetails priceDetails={price} />
      </div>
    </div>
  );
}

export default CartPage;
