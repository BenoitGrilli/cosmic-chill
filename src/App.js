import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Gallery from './components/Gallery';
import Home from "./pages/Home";
import CountDown from "./components/Countdown";
import Accueil from "./components/Accueil";
import LoggingPage from "./components/LoggingPage";
import NavBar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/loggingpage';

  return (
    <>
      {hideNavBar ? null : <NavBar />}
      <Routes>
        <Route path='/loggingpage' element={<LoggingPage/>} />
        <Route path='/countdown' element={<CountDown seconds={100}/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/accueil' element={<Accueil/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </>
  );
}

export default App;