import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  console.log("parent");

  return (
    <div>
      <h1>Parent {count}</h1>

      <button
        onClick={() => setCount((p)=>p+1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        parent
      </button>
      <Child  count={count} setCount={setCount}/>
    </div>
  );
}

export default Parent;
