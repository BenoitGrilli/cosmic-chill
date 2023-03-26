import React from "react";
import { Link } from "react-router-dom";

export default function ButtonTemplate(props) {
  return (
    <Link
      to={props.to}
      className="text-white font-bold py-2 px-4 border border-blue-700 
          rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          hover:scale-105 duration-300"
    >
      {props.text}
    </Link>
  );
}
