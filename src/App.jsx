import { useState } from "react";
import "./App.css";
import HeroSection from "./sections/hero-section";
import NavBar from "./components/nav-bar";
import "./assets/fonts/Montseratt/Montserrat-Regular.otf";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;
