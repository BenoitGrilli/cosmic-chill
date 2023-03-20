
import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
      <>
      <ThirdwebProvider activeChain="ethereum">       
    <header>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">COSMIC CHILL</span>
    </a>
      
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {/* <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500 " href="/gallery">Mint</a> */}
      <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500" href="/gallery">COLLECTION</a>
      {/* <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500" href="/gallery">Qui suis-je</a> */}
      {/* <button class="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-2 px-4 rounded ">CONNECT WALLET</button> */}
      <ConnectWallet 
        accentColor="#fff"
        colorMode="dark"
        btnTitle="Connect Wallet"
      />
    </nav>
    </div>
    </header>
    </ThirdwebProvider>
    </>
    
)}





