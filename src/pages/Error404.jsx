import React from "react";
import Navbar from "../components/Navbar";
import NavbarV2 from "../components/NavbarV2";

export default function Error404() {
  return (
    <>
      <NavbarV2 />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-gray-900">Page not found</h1>
      </div>
    </>
  );
}
