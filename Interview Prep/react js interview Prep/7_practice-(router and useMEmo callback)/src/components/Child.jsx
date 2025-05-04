import React, { useState, memo } from "react";

const Child = memo(function Child({count}) {
    const [countC, setCountC] = useState(0);

    console.log("child");
    return (
        <>
            <div>Child {countC}------{count} </div>

            <button
                onClick={() => setCountC(countC + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600"
            >
                child
            </button>
        </>
    );
});

export default Child;
