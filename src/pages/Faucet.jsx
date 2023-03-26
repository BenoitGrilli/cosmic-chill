import React from "react";
import backgroundImage from "../images/space-mint.png";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import BuyButton from "../components/BuyButton";
import ButtonTemplate from "../components/ButtonTemplate";
import Navbar from "../components/Navbar";


const goerli = "https://zhejiang.beaconcha.in/address/0x12e0bfcc3c4d7cbba8636464aafa1044b20dda0f"
const goerliLink = (
  <a className = "text-blue-600" href={goerli} target="_blank" rel="noopener noreferrer">
    {goerli}
  </a>)

const MintToken = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
  };

  return (
    <>
        <div style={backgroundStyle}>
        <Navbar />
        <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded " alt="planet token
        " src="/images/logo-token.png" />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Planets tokens are used to mint Cosmic Chill NFTs</h1>
          <p className="mb-8 leading-relaxed text-white">claim yours for free. (you need goerli in your wallet to make the transaction)</p>
          <div className="flex justify-center space-x-4">
            
            <ButtonTemplate text="PLANET FAUCET"/>
            <ButtonTemplate to="https://goerlifaucet.com/" text="GOERLI FAUCET"/>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
    )
};

export default MintToken;
