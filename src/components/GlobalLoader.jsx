import React from "react";

const GlobalLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">

      <div className="relative flex items-center justify-center">

        {/* glow */}
        <div className="absolute w-20 h-20 rounded-full bg-secondary/15 blur-xl"></div>

        {/* spinning ring */}
        <div className="w-12 h-12 border-[3px] border-secondary/20 border-t-secondary rounded-full animate-spin"></div>

        {/* center dot */}
        <div className="absolute w-2.5 h-2.5 bg-secondary rounded-full"></div>

      </div>

    </div>
  );
};

export default GlobalLoader;