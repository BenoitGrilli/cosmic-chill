import React from "react";
import backgroundImage from "../images/space-mint.png";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import BuyButton from "../components/BuyButton";
import ButtonTemplate from "../components/ButtonTemplate";
import Navbar from "../components/Navbar";

const MintToken = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <>
        <div style={backgroundStyle}>
        <Navbar/>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 class="text-center rounded-md title-font sm:text-4xl text-3xl mb-4 font-medium text-white
            bg-from ">MINT YOUR PLANET TOKEN</h1>
            <h1 class="text-center rounded-md title-font sm:text-4xl text-3xl mb-4 font-medium text-white
            bg-from ">&</h1>
            <h1 class="text-center rounded-md title-font sm:text-4xl text-3xl mb-4 font-medium text-white
            bg-from ">CLAIM YOUR NFT</h1>
              <img class="scale-[0.5] lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
               alt="hero" src="/images/logo-token.png"></img>
              <div class="text-center lg:w-2/3 w-full">
  
              <ButtonTemplate text="MINT NOW" />
               
              </div>
          </div>
        </div>
    </>
    )
};

export default MintToken;
