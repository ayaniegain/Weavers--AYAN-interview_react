import React from "react";
import Item from "./Item";

function ItemContainer({ productStatus }) {
  const { product, error, loading } = productStatus;

  if (loading || error) {
    return <div className="text-center text-red-500">Loading....</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {product.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ItemContainer;
