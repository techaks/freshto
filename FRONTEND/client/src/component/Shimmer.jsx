import React from "react";

const ShimmerLoader = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 p-6">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          className="w-[200px] h-[120px] bg-gray-500 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default ShimmerLoader;
