import React from "react";
import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import NavBar from './components/Navbar'
import Home from "./pages/Home";

function App() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route path='/hero' element={<Hero/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/gallery' element={<Gallery/>} />
            </Routes>
            
    
        
        
        </>
    );
}

export default App;