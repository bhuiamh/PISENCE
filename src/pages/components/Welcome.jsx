import React from "react";

const Welcome = () => {
  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-center mt-4 text-4xl font-mono mb-4 text-white hover:text-orange-600 font-bold">
          Hello Pisence
        </h1>
        <p className="text-lg mb-8">
          We're excited to have you on board. Get ready for a fantastic academic
          journey!
        </p>
        <div className="text-gray-200">
          <p className="text-base">
            "Success is not final, failure is not fatal: It is the courage to
            continue that counts."
          </p>
          <p className="text-sm mt-4">- Winston Churchill</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
