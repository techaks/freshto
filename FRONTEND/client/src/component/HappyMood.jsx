import React from "react";

const HappyMood = () => {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm  mb-10 animate-bounce-slow justify-center ">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-orange-500"
      >
        <path
          d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm0-3.5a6.5 6.5 0 0 1-5.7-3.4.75.75 0 0 1 1.3-.74A5 5 0 0 0 12 17.5a5 5 0 0 0 4.4-2.14.75.75 0 1 1 1.3.74A6.5 6.5 0 0 1 12 18.5Zm-3.25-8.25a1.25 1.25 0 1 1-1.25-1.25 1.25 1.25 0 0 1 1.25 1.25Zm9 0a1.25 1.25 0 1 1-1.25-1.25 1.25 1.25 0 0 1 1.25 1.25Z"
          fill="currentColor"
        />
      </svg>
      <div>
        <p className="text-orange-700 font-semibold text-lg">
          You're just a few steps away!
        </p>
        <p className="text-orange-600 text-sm">
          We’re excited! Your products are almost yours 🎉
        </p>
      </div>
    </div>
  );
};

export default HappyMood;
