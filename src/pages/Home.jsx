import React from "react";
import BuyButton from "../components/BuyButton";
import Description from "../components/Description";
import MyCarousel from "../components/MyCarousel";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pb-1 pt-1 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/images/2.png" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to 
          <Typewriter
            options={{
              strings: ['COSMIC CHILL', 'SPACE','THE METAVERSE', 'YOUR LAND'],
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
    </section>
    <MyCarousel/>
    </>
  );
}

export default Home;