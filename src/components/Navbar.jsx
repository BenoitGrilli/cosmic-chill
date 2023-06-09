
import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
      <>       
    <header>
    <div class="bg-transparent pt-8 px-32 flex-col">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/home">
    {/* <h1 className ="text-center ml-3 text-5xl" 
      style={{ fontFamily: "'Anton', sans-serif" }} >COSMIC CHILL</h1>  */}
         
    </a>
      
      <nav class="text-white md:ml-auto flex flex-wrap items-center text-base justify-center">

      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/home">HOME</a>
      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/gallery">GALLERY</a>
      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/mint">MINT</a>
      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/mycollection">MY COLLECTION</a>
  
      {/* <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500" href="/gallery">Qui suis-je</a> */}
      {/* <button class="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-2 px-4 rounded ">CONNECT WALLET</button> */}
      
      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/faucet">FAUCET</a>
      <ConnectWallet 
        accentColor="#fff"
        colorMode="dark"
        btnTitle="Connect Wallet"
      />
    </nav>
    </div>
    </header>
    </>
    
)}





