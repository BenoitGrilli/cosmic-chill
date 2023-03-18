import React from "react";
import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import NavBar from './components/Navbar'
import Home from "./pages/Home";
import CountDown from "./components/Countdown";
import Accueil from "./components/Accueil";
function App() {
    return (
        <>
            <NavBar/>


            <Routes>
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