import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  const backgroundStyle = {
    backgroundImage: "url('')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "h-screen",
  };

  return (
    <>
    <div style={backgroundStyle}>
      <section >
      <Navbar /> 
      </section>
      </div>
    </>

  );
}

export default Home;
