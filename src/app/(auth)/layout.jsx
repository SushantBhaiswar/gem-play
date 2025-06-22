import React from "react";

const SignIn = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-[#062c30] text-white">
      {/* Left section */}
      <div className="w-[50%] flex items-center justify-center border-r border-gray-600">
        <h1 className="text-3xl font-semibold">Admin Panel</h1>
      </div>

      {/* Right section */}
      {children}
    </div>
  );
};

export default SignIn;
