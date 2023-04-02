import React from "react";

export default function TextNavBar(props) {
  const { text, href } = props;

  return (
    <a className={`font-bold py-2 px-4 hover:text-blue-500`} href={href}>
      {text}
    </a>
  );
}
