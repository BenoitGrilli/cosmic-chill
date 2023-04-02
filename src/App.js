import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";


import Error404 from "./pages/Error404";

import Astronaut from "./components/Astronaut";

import ButtonMint from "./components/ButtonMint";

import MintPage from "./pages/MintNFT";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Zhejiang } from "@thirdweb-dev/chains";

import UnderConstruction from "./components/UnderConstruction";
import YourCollection from "./pages/YourCollection";
import GetSupply from "./contract-component/Getsupply";
import Faucet from "./pages/Faucet";

import Gallery from "./pages/Gallery";
import Description from "./components/Description";

function App() {
  const location = useLocation();
  // const hideNavBar = location.pathname === '/' || location.pathname ==='/*';

  return (
    <>
      <ThirdwebProvider activeChain={Zhejiang}>
        {/* {hideNavBar ? null : <NavBar />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mint" element={<MintPage />} />

          <Route path="/supply" element={<GetSupply />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mycollection" element={<YourCollection />} />
          <Route path="/mintbutton" element={<ButtonMint />} />

          <Route path="/description" element={<Description />} />

          <Route path="*" element={<Error404 />} />

          <Route path="/astronaut" element={<Astronaut />} />
          <Route path="/faucet" element={<Faucet />} />
        </Routes>
        <UnderConstruction />
      </ThirdwebProvider>
    </>
  );
}

export default App;
