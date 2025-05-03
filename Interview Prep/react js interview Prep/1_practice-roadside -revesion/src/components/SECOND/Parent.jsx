import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  let [count, setCount] = useState(0);
  function incCounter() {
    setCount((prev) => prev + 1);
  }

  let arr = ["hello", "hi", 20];

  let obj = Object.assign({}, arr);

  console.log(obj);

  return (
    <div>
      <h2>counter {count}</h2>
      <Child incCounter={incCounter} />
    </div>
  );
}

export default Parent;
