import React from "react";
import Typewriter from "typewriter-effect";

function WelcomeTyping() {
  return (
    <h1 className="pt-48 sm:text-8xl text-3xl mb-4 font-medium text-white" style={{ fontFamily: "'Anton', sans-serif" }}>
      Welcome to
      <Typewriter
        options={{
          strings: [
            "COSMIC CHILL",
            "SPACE",
            "THE METAVERSE",
            "YOUR HOME",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}

export default WelcomeTyping;
