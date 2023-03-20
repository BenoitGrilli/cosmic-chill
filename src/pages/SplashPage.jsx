import React from "react";
import backgroundImage from "../images/space.png";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

const SplashPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <>
    <ThirdwebProvider activeChain="ethereum">
    
    
    <div style={backgroundStyle}>
      <div className="flex flex-col justify-center items-center h-full">
      <ConnectWallet/>
        <button className="m-10 text-white font-bold py-2 px-4 border border-blue-700 
        rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        hover:scale-105 duration-300"
        >
        <a className href="/home">VISIT</a>
        </button> 
      </div>
    </div>
    </ThirdwebProvider>
    </>
  );
};

export default SplashPage;
