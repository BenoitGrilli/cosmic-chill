import React from "react";
import BuyButton from "../components/BuyButton";
import Description from "../components/Description";
import MyCarousel from "../components/MyCarousel";
import "animate.css";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

import Astronaut from "../components/Astronaut";
import ButtonTemplate from "../components/ButtonTemplate";
import WelcomeTyping from "../components/WelcomeTyping";
import backgroundImage from "../images/big-bg.png";
import LandBeach from "../images/land-home.png";
import YourLand from "./YourLand";
import LearnMore from "./LearnMore";
import HomeCloud from "./HomeClouds";
import HomeAfterClouds from "./HomeAfterClouds";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "h-screen",
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font" style={backgroundStyle}>
          <Navbar />
          <WelcomeTyping />

          <div class="pr-6 pl-6 pt-0 flex flex-col md:flex-row">
            <div class="w-full md:w-1/2">
              <Astronaut />

              <div className="flex justify-center">
                <ButtonTemplate to="/gallery" text="COLLECTION" />
              </div>
            </div>
            <div>
              <div className=" mt-20 text-lg text-white">
                <Description />
              </div>
            </div>
          </div>
          <MyCarousel />
          <YourLand />
          <LearnMore />
          <HomeCloud />
        </section>
        <HomeAfterClouds />
      </div>
    </>
  );
}

export default Home;
