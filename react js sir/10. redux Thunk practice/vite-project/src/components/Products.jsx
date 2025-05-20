import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, fetchProducts } from "../REDUX/product.slice.js";
import { useNavigate } from "react-router";

function Products() {
  const { product, loading } = useSelector((state) => state.product);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleShowDetailsPage = async (id) => {
    try {
      const result = await dispatch(fetchProductDetails(id));

      if (fetchProductDetails.fulfilled.match(result)) {
        navigate(`/details/${id}`);
      } else if (fetchProductDetails.rejected.match(result)) {
        alert("Failed to load product details.");
      }
    } catch (err) {
      console.error("Error while fetching product details:", err);
      alert("An unexpected error occurred.");
    }
  };

  if (loading === "loading") return <p>Loading...</p>;
  if (loading === "error") return <p>Failed to load products.</p>;

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {product.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-64"
        >
          <img
            src={item.images}
            alt={item.title || "Product"}
            className="w-32 h-32 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">
            {item.category || "Category"}
          </h2>
          <span className="text-green-600 font-bold mb-2">${item.price}</span>
          <button
            onClick={() => handleShowDetailsPage(item.id)}
            className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Show Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
