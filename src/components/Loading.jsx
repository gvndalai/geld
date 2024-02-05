import React from "react";

export const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    </div>
  );
};
