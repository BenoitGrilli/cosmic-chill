import React from "react";
import BuyButton from "../components/BuyButton";
import Description from "../components/Description";
import MyCarousel from "../components/MyCarousel";
import 'animate.css';
import Typewriter from 'typewriter-effect';
import Navbar from "../components/Navbar";

import Astronaut from "../components/Astronaut";



function Home() {

  const backgroundStyle = {
    backgroundImage: "url('/images/banner-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "100vh",
    // pas possible d'ajouter h-5/6 ?
  };

  return (
    <>
 <section className="text-gray-600 body-font" style={backgroundStyle}>
 
      <div className="container mx-auto flex mb-56 first-letter:px-5 pt-4 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          {/* <img className= "pl-10 object-cover object-center rounded h-96 scale-125" alt="hero" src="/images/chilling astronaut.png" />     */}
          <Astronaut className="scale-150"/>
        </div>
        <div className=" md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome to 
          <Typewriter
            options={{
              strings: ['COSMIC CHILL', 'SPACE','THE METAVERSE', 'YOUR HOME'],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>
          <Description/>
          <div className="flex justify-center">
          
          <BuyButton/>

          </div>    
        </div>
      </div>
      <MyCarousel/>
    </section>
 
    </>
  );
}

export default Home;