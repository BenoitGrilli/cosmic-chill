import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";

const AstronautWelcome = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    gsap.fromTo(
      image,
      { y: 0 },
      {
        y: 80,
        duration: 1.4,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  return (
    <img
      ref={imgRef}
      src="/images/welcome-astronaut-token.png"
      alt="Welcome Astronaut"
      style={{ width: "25%" }} 
    />
  );
};

export default AstronautWelcome;
