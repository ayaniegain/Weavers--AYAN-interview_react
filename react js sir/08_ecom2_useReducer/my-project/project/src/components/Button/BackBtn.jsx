import React from 'react';
import { useNavigate } from 'react-router';

function BackBtn({ position }) {
    let navigate = useNavigate();
    
    return (
        <button
            onClick={() => navigate(-1)}
            className={`absolute top-4 ${position === 'left' ? 'left-4' : 'right-4'} 
            bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300`}
        >
            {"<"} Go Back
        </button>
    );
}

export default BackBtn;
