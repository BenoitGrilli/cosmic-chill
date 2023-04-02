import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import TextNavBar from "./TextNavBar";

export default function Navbar() {
  return (
    <>
      <header className="bg-red-500">
        <div className=" mx-auto flex flex-wrap pt-8 px-32 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            href="/home"
          >
            <h1
              className="text-center ml-3 text-5xl"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              TITLE
            </h1>
          </a>

          <nav class="bg-red-500 text-white md:ml-auto flex flex-wrap items-center text-base justify-center">
            <TextNavBar text="HOME" href="/home" />
            <TextNavBar text="GALLERY" href="/gallery" />
            <ConnectWallet
              accentColor="#fff"
              colorMode="dark"
              btnTitle="Connect Wallet"
            />
          </nav>
        </div>
      </header>
    </>
  );
}
