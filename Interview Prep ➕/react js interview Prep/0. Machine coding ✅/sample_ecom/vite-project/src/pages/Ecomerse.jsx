import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../Redux/product.slice";

function Ecomerse() {

  let dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let results = await res.json();

        dispatch(getAllProducts(results));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return <div>e commerce</div>;
}

export default Ecomerse;
