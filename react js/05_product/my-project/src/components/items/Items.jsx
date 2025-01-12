import React from "react";

function Items({ product }) {
  const {
    id,
    title,
    category,
    price,
    discountPercentage:finalPrice,
    rating,
    thumbnail,
    reviews
  } = product;

  return (
    <div className="bg-slate-200" >
        <img src={thumbnail} alt={title} />
        <span className="brand">{category}</span>
        <div className="rating">
            <p>{rating}</p>
            <p>{reviews.length}</p>
        </div>
        <div className="price-section">
            <p>₹{finalPrice}</p>
            <p>₹{price}</p>
        </div>




    </div>
  )
}

export default Items;
