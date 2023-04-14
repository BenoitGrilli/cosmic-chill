import React from "react";
import backgroundImage from "../images/clouds.svg";

export default function HomeCloud() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "100vh",
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font" style={backgroundStyle}>
          {/* Content Goes Here */}
        </section>
      </div>
    </>
  );
}
