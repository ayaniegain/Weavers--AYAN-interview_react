import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtecTedCard() {
    const [isAllowed, setIsAllowed] = useState(false); // State to track access
    const navigate = useNavigate();

    function handlevalid(action) {
        if (action === "yes") {
            setIsAllowed(true);
        } else {
            setIsAllowed(false);
            navigate("/");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            {isAllowed ? (
                <Outlet />
            ) : (
                <>
                    <h2 className="mb-4 text-xl font-semibold">Check Validation</h2>
                    <div className="flex space-x-4">
                        <button
                            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                            onClick={() => handlevalid("yes")}
                        >
                            Yes
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                            onClick={() => handlevalid("no")}
                        >
                            No
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProtecTedCard;
