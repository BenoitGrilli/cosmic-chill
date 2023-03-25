
import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
      <>       
    <header>
    <div class="ontainer mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0" href="/home">

      <span className ="ml-3 text-2xl" >COSMIC CHILL</span>
    </a>
      
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {/* <a class="texte-black-500 font-bold py-2 px-4 hover:text-blue-500 " href="/gallery">Mint</a> */}
      
      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/mycollection">MY COLLECTION</a>
      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/gallery">GALLERY</a>
      <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/mint">MINT</a>
  
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





