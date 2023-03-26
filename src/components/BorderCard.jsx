import React from "react";

const BorderCard = ({ children }) => {
  return (
    <div className="my-2 border border-white border-opacity-75 shadow-lg rounded-xl backdrop-blur-lg">
      <p className="text-white p-3">{children}</p>
    </div>
  );
};

export default BorderCard;
