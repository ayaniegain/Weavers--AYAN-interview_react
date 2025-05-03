import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Products({addToCart}) {
  const [data, setData] = useState([]);

  async function getResponse() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getResponse();
  }, []);


  if (!data) {
    return (
      <>
      <h2>loading.......</h2>
      </>
    )
  }

  return (
    <div className="flex flex-wrap gap-20 ">
     {
      data.map(({id,body,title})=><ProductList id={id}body={body}title={title} key={id} addToCart={addToCart}/>)
     }
    </div>
  );
}

export default Products;
