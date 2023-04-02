import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";


import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Zhejiang } from "@thirdweb-dev/chains";

import UnderConstruction from "./components/UnderConstruction";


function App() {
  return (
    <>
      <ThirdwebProvider activeChain={Zhejiang}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <UnderConstruction />
      </ThirdwebProvider>
    </>
  );
}

export default App;
