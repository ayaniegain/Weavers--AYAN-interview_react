import React from "react";
import Items from "../components/items/Items";
import Pagination from "../components/pagination/Pagination";

function ProductPage({ products }) {
  console.log(products);
  return (
    <div className="flex flex-row  pt-16 z-0">
      <div className=" bg-teal-800 w-[15%] flex flex-col pt-4  ">
        <div className="px-4">
          <h2 className="font-bold text-white text-xl">FILTERS</h2>
          <hr />
          <h4 className="font-bold text-white text-xl">price</h4>
          <hr />
        </div>
      </div>

      <div className="flex flex-col  justify-center w-[85%] items-center">
        <div className="  flex  flex-wrap  justify-center  p-8 gap-2 ">
          {products.map((product) => (
            <Items key={product.id} product={product} />
          ))}
        </div>

        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
