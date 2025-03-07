import React from "react";

function HomeShimmer() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="border border-gray-400 shadow rounded-md h-60 flex flex-col justify-center items-center p-4 w-60 max-w-sm mx-auto"
        >
          <div className="bg-slate-300 h-full w-full mb-4"></div>
          <div className="animate-pulse flex flex-col space-y-4 w-full">
            <div className="h-4 bg-slate-400 rounded w-3/4 mx-auto"></div>
            <div className="space-y-3 w-full px-4">
              <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto"></div>
              <div className="h-4 bg-slate-400 rounded w-full"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HomeShimmer;
