
function CartItems({ quantity, title, price, originalPrice, img }) {


  return (
    <div className="cart-item flex flex-col md:flex-row items-center p-4 border-b border-gray-200">
      <img src={img} alt="Product" className="cart-item-image w-20 h-20 object-cover mr-4" />
      <div className="cart-item-details flex-1">
        <div>

        <h2 className="cart-item-title text-md font-semibold">{title}</h2>
        <p className="cart-item-price text-gray-700">${price}</p>
        </div>
       
        <div className="cart-item-quantity flex items-center mt-2">
          <button className="quantity-button bg-gray-200 text-gray-700 px-2 py-1 rounded" >-</button>
          <span className="mx-2">{quantity}</span>
          <button className="quantity-button bg-gray-200 text-gray-700 px-2 py-1 rounded" >+</button>
        </div>
       
      </div>
    </div>
  );
}

export default CartItems;