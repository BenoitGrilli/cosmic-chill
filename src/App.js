import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import CountDown from "./components/Countdown";
import SplashPage from "./pages/SplashPage";
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import CountDownTwo from "./components/CountdownTwo";
import Error404 from "./pages/Error404";
import Minted from "./components/Minted";
import MyCarousel from "./components/MyCarousel";
import Astronaut from "./components/Astronaut";
import MintToken from "./pages/MintToken";
import ButtonMint from "./components/ButtonMint";

import MintPage from "./pages/MintNFT";



function App() {
  const location = useLocation();
  // const hideNavBar = location.pathname === '/' || location.pathname ==='/*';

  return (
    <>

      {/* {hideNavBar ? null : <NavBar />} */}
      <Routes>
        <Route path='/' element={<SplashPage/>} />
        <Route path='/home' element={<Home/>} />

        <Route path='/mint' element={<MintPage/>} />

        <Route path='/mintbutton' element={<ButtonMint/>} />

        <Route path='/countdowntwo' element={<CountDownTwo/>} />
        
        <Route path='/countdown' element={<CountDown seconds={100}/>} />
        <Route path='/hero' element={<Hero/>} />

        <Route path='/gallery' element={<MyCarousel/>} />
        <Route path='*' element={<Error404 />} />
        <Route path='minted' element={<Minted
          image="/images/43.png"
          name="Cosmic Chill #258"
          owner="0xf99...28C"
          assetId="1rj949940l1kd0ie095941"
          price="1.9"
        />} />
        <Route path='/astronaut' element={<Astronaut />} />
        <Route path='/mint' element={<MintToken />} />
        
      </Routes>
     
    </>
  );
}

export default App;