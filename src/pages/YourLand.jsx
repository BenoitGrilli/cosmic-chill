import React from "react";
import LandBeach from "../images/land-home.png";

const titleStyle = {
  fontSize: "2rem",
  color: "white",
  marginBottom: "1rem",
};

const descriptionStyle = {
  fontSize: "1.5rem",
  color: "white",
  marginBottom: "3rem",
};

const YourLand = () => {
  return (
    <>
      <div className="pt-52 pl-16 flex flex-col md:flex-row justify-center items-center ">
      <div className="text-white text-center ml-3 text-5xl">
          <h1 className="pb-8">10+ planets</h1>
          <h1>10 000 NFTs</h1>
        </div>

        <div className="pr-32 text-center lg:w-2/3 w-full flex-grow">
          <h1 style={titleStyle}>YOUR METAVERSE LAND</h1>
          <p  style={descriptionStyle}>
            Imagine having the freedom to create, explore, and connect with
            others in a world that is truly your own. With our Metaverse land,
            you can build your dream home, start a business, or host events
            with friends from all over the world. And the best part? You'll own
            it all.
            <br />
            <br />
            This is your chance to be a part of the future of virtual reality and
            join a community of innovators, creators, and visionaries. Don't
            wait, secure your piece of the Metaverse today!
          </p>
        </div>


        <div className="pr-16">
          <img
            className="aspect-square object-cover"
            src={LandBeach}
            alt="Preview GIF"
          />
        </div>
 
      </div>
    </>
  );
};

export default YourLand;