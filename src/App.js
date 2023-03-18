import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Gallery from './components/Gallery';
import Home from "./pages/Home";
import CountDown from "./components/Countdown";
import Accueil from "./components/Accueil";
import LoggingPage from "./components/LoggingPage";
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import CountDownTwo from "./components/CountdownTwo";
import Error404 from "./pages/Error404";

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/loggingpage' || location.pathname ==='/*';

  return (
    <>
      {hideNavBar ? null : <NavBar />}
      <Routes>
      <Route path='/countdowntwo' element={<CountDownTwo/>} />
        <Route path='/loggingpage' element={<LoggingPage/>} />
        <Route path='/countdown' element={<CountDown seconds={100}/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/accueil' element={<Accueil/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;