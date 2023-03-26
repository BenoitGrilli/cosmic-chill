import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";

const Astronaut = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    gsap.fromTo(
      image,
      { y: 0 },
      {
        y: 100,
        duration: 1,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  return (
    <img
      ref={imgRef}
      src="/images/chilling astronaut.png"
      alt="Chilling Astronaut"
    />
  );
};

export default Astronaut;
