import React, { useState } from "react";

function People({ title }) {
  const [people, setPeople] = useState("")
  function handleClick(e) {

    setPeople(e.target.value);
    }
  
  return (
    <div>
      <h2>subject {people}</h2>
      <button
        value={title}
        onClick={(e) => handleClick(e)}
        className="border-black p-2 border-2"
      >
        click
      </button>
    </div>
  );
}

export default People;
