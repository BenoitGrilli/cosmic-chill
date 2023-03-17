import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/output.css";
import Navbar from "./components/Navbar";
import Gallery from"./components/Gallery";
import Error404 from "./pages/Error404";
import Hero from "./components/Hero";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "./pages/Error404",
    element: <Error404/>
  },
]);

root.render(
  <React.StrictMode>
    
    <ThirdwebProvider activeChain={activeChain}>
    <Navbar/>
    <div>    
      <Gallery/>
      <Error404/>
      <Hero/>
      <RouterProvider router={router} />
    </div>

    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);


