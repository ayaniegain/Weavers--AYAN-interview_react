import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { useGetProduct } from "../context/FetchAllProductContext";
import { addCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function Details() {
  let { data: product, error, loading } = useGetProduct();
  let [singleProduct, setSingleProduct] = useState([]);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const pId = searchParams.get("productId");

  function getSingleProduct() {
    setSingleProduct(product.find((item) => +item.id === +pId));
  }

  useEffect(() => {
    getSingleProduct();
  }, [product]);

  function addToCart(product) {
    dispatch(addCart(product));
    navigate("/cart");
  }

  if (loading || error) {
    return <div className="text-center text-red-500">Loading....</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Details</h2>
      <h3 className="text-xl mb-4">{singleProduct?.title}</h3>
      <button
        onClick={() => addToCart(singleProduct)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Details;
