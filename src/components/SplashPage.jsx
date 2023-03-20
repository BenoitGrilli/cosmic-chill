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
      <div className="flex justify-center items-center h-full">
        <ConnectWallet />;
      </div>
    </div>
    </ThirdwebProvider>
    </>
  );
};

export default SplashPage;
