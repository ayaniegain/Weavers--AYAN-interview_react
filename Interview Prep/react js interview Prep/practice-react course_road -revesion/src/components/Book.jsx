import React, { useRef } from 'react';

function Book() {
  let myref = useRef();

  const handleClick = () => {
    alert(myref.current.value); // Access input value on button click
  };

  return (
    <div>
      <h2>{myref.current?.value}</h2>
      <input type="text" ref={myref} placeholder="Enter text" />
      <button onClick={handleClick}>Show Value</button>
      <h2>This is Book</h2>
    </div>
  );
}

export default Book;
