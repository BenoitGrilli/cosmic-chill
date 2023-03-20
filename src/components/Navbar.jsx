
import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
      <>
      <ThirdwebProvider activeChain="ethereum">       
    <header>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500 " href="/gallery">Mint</a>
      <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500" href="/gallery">Gallery</a>
      <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500" href="/gallery">Qui suis-je</a>
      {/* <button class="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-2 px-4 rounded ">CONNECT WALLET</button> */}
      <ConnectWallet  />
    </nav>
    </header>
    </ThirdwebProvider>
    </>
    
)}





