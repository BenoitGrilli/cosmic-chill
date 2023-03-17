import React from "react";
import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import NavBar from './components/Navbar'

function App() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route path='/gallery'  element={<Gallery/>} />
            </Routes>
            
        
        
        
        </>
    );
}

export default App;