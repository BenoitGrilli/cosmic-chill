import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import ErrorImage from "../images/error.png";

export default function SomethingWentWrong() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        className="aspect-square object-cover"
        src={ErrorImage}
        alt="Preview GIF"
      />
      <h1 className="p-2 text-3xl font-bold text-gray-900">
        Something went wrong.
      </h1>
      <h1 className="text-2xl">
        Don't forget to connect your wallet.
      </h1>
      <div className="pt-5">
        <ConnectWallet />
      </div>
      </div>
     
  );
}
