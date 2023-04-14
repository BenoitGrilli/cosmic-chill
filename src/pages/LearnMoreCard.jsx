import React from "react";

const LearnMoreCard = (props) => {
  return (
    <div className="bg-indigo-900 bg-opacity-50 overflow-hidden shadow rounded-lg">
      <img src={props.image} alt="Dummy Image" />
      <div className="px-4 py-4">
        <h1 className="text-lg font-bold mb-2">{props.title}</h1>
        <p className="text-gray-700 text-base mb-2">{props.description}</p>
        <a
          href="#"
          className="text-blue-500 text-base hover:text-blue-700 font-bold"
        >
          {props.learnMoreText}
        </a>
      </div>
    </div>
  );
};

export default LearnMoreCard;
