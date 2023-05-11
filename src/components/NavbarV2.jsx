import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Logo from "../images/planet-logo.png"

export default function NavbarV2() {
  return (
    <>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white ml-3 text-2xl mb-4 md:mb-0" style={{ fontFamily: "'Anton', sans-serif" }} href="/home">

COSMIC CHILL

{/* <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span> */}



          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/home">
              HOME
            </a>
            <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/gallery">
              GALLERY
            </a>
            <a class=" font-bold py-2 px-4 hover:text-blue-500" href="/mint">
              MINT
            </a>
            <a
              class=" font-bold py-2 px-4 hover:text-blue-500"
              href="/mycollection"
            >
              MY COLLECTION
            </a>
          </nav>

          <ConnectWallet
            accentColor="#fff"
            colorMode="dark"
            btnTitle="Connect Wallet"
          />
        </div>
      </header>
    </>
  );
}
