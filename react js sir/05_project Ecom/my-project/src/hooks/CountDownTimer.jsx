import React, { useState, useEffect } from "react";

function CountDownTimer() {
  const [counter, setCounter] = useState(20); // Seconds countdown
  const [counter2, setCounter2] = useState(10); // Minutes countdown

  useEffect(() => {
    // Timer for seconds countdown
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (counter2 > 0) {
      setCounter(20); // Reset seconds when minute changes
      setCounter2((prevCounter2) => prevCounter2 - 1);
    }
  }, [counter]);

  return (
    <div className="pt-1 bg-orange-600 text-white w-full flex justify-center">
      <div>
        {counter2 == 0 ? (
          <div className="flex gap-5">
            <h2 className="font-mono text-2xl">Sale is LIVE! </h2>
          </div>
        ) : (
          <div className="flex gap-5">
            <h2 className="font-mono text-2xl">Upcoming sale in next </h2>
            <div>
              <span className="countdown font-mono text-3xl">{counter2}</span>
              <span> min</span>
            </div>
            <div>
              <span className="countdown font-mono text-3xl">{counter}</span>
              <span> sec</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountDownTimer;
