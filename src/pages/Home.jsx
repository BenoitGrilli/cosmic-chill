import React from "react";
import BuyButton from "../components/BuyButton";
import Description from "../components/Description";
import MyCarousel from "../components/MyCarousel";
import "animate.css";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

import Astronaut from "../components/Astronaut";
import ButtonTemplate from "../components/ButtonTemplate";


function Home() {
  const backgroundStyle = {
    backgroundImage: "url('/images/bg-6.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "h-screen",
  };

  return (
    <>
    <div>

      <section className="text-gray-600 body-font" style={backgroundStyle}>
      <Navbar />
      
        <div class="pr-12 pl-12 pt-2 flex flex-col md:flex-row">
          <div class="w-full md:w-1/2">
            <Astronaut />
          </div>
          <div>
  
            <div className=" mt-20 text-lg text-white">
              <Description />
            </div>
          </div>
        </div>
       
        <MyCarousel />
      </section>
      </div>
    </>

  );
}

export default Home;
