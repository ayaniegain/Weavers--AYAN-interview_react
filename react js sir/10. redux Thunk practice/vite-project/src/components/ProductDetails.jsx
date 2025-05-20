import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProductDetails } from "../REDUX/product.slice";
import { useNavigate, useParams } from "react-router";

function ProductDetails() {
  const { productDetails, loading, product } = useSelector(
    (state) => state.product
  );
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    if (id && !productDetails) {
      dispatch(fetchProductDetails(Number(id)));
    }
  }, [dispatch, id, productDetails]);

  if (loading === "loading") {
    return (
      <div className="text-center p-4 text-lg">Loading product details...</div>
    );
  }

  if (!productDetails) {
    return (
      <div className="text-center p-4 text-red-500">
        No product details available.
      </div>
    );
  }

  function handleAddToCart() {
    if (productDetails && productDetails.id) {
      dispatch(addToCart(productDetails));
      navigate("/cart");
    } else {
      alert("Product details not available.");
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <img
        src={productDetails.images?.[0] || ""}
        alt={productDetails.title}
        className="w-full h-64 object-contain mb-4 rounded"
      />
      <h2 className="text-2xl font-semibold mb-2">{productDetails.title}</h2>
      <p className="text-gray-600 mb-2">
        Category: <span className="font-medium">{productDetails.category}</span>
      </p>
      <p className="text-green-600 font-bold text-xl mb-4">
        ${productDetails.price}
      </p>
      <p className="text-sm text-gray-700 mb-6">{productDetails.description}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
