import React, { useState } from 'react';

const Password=() =>{
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full max-w-xs">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        className="w-full pr-10 pl-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? '🙈' : '👁️'}
      </span>
    </div>
  );
}

export default Password