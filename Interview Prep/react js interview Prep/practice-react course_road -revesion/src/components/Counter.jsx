import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    // document.title = count;

    return(()=>{
        console.log("clean up")
        document.title = count;
    })
  });

  useEffect(() => {
    console.log("first");
  }, [count]);

  function handleClick() {
    setTimeout(() => {
      setcount((prev) => prev + 1);
    }, 1000);
  }
  return (
    <>
      <div>Counter {count}</div>
      <button className="border-green-700 p-2 border-3" onClick={handleClick}>
        counter ++
      </button>
    </>
  );
}

export default Counter;
