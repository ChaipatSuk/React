import React from "react";

export const Arrow = ({ className }) => {
  return (
    <svg
      className={`arrow ${className}`}
      fill="none"
      height="700"
      viewBox="0 0 205 700"
      width="205"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M115 336L103 324L115 312" stroke="#4E6C50" strokeWidth="6" />
    </svg>
  );
};
