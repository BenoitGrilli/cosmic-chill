import React from "react";
import backgroundImage from "../images/space-mint.png";

import ButtonTemplate from "../components/ButtonTemplate";
import Navbar from "../components/Navbar";

import GetSupplyERC20 from "../contract-component/token-component/GetERC20Supply";
import GetERC20BalanceOf from "../contract-component/token-component/GetERC20BalanceOf";
import ButtonMintERC20 from "../components/ButtonMintERC20";

// import ButtonMintERC20 from "../components/ButtonMintERC20";

const MintToken = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  const titleStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "2rem",
    textAlign: "center",
  };

  const descriptionStyle = {
    fontSize: "1.5rem",
    color: "white",
    marginBottom: "3rem",
    textAlign: "center",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <Navbar />
        <div className="container mx-auto flex  items-center justify-center flex-col p-6">
          <h1 className="pt-6 text-5xl">
          <GetERC20BalanceOf/>
          </h1>
          <h2 className="pt-6 pb-4 text-1xl">
          <GetSupplyERC20/>
          </h2>
          <ButtonMintERC20/>
          
        {/* <ButtonMintERC20/> */}
    
        

        </div>
       
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="planet token"
              src="/images/logo-token.png"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 style={titleStyle}>Planets tokens are used to mint Cosmic Chill NFTs</h1>
              <p style={descriptionStyle}>
                Claim yours for free using the Planet Faucet. To complete the transaction, you'll need ETH-TEST in your Zheijang Wallet your
                wallet. If you don't have any, get some from the Zhejiang Faucet.
              </p>
              <div>
              <div className="flex justify-center space-x-4">
                <ButtonTemplate to="https://chainlist.org/?testnets=true&search=zheijang" text="Add Zheijang to your metamask" />
              </div>
              <div className="flex justify-center space-x-4 pt-5">
                <ButtonTemplate to="https://zhejiang-faucet.pk910.de/" text="Zhejiang FAUCET" />
              </div>
              </div>
              

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MintToken;
