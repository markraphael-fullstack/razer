import React from "react";
import Image1 from "../../assets/png/razer-nari-thx-logo.png";
import Image2 from "../../assets/png/razer-nari-chroma-logo.png";
import RazerNariLogo from "../../assets/icons/razer-nari-logo.svg";
import "./index.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="left-content">
          <h1>SUPREME WIRELESS IMMERSION</h1>
          <p>
            When it comes to gaming immersion, sound plays a critical role. It
            engages your sense of hearing to determing the atmosphere and mood,
            creating a lifelike experience that lets you truly embody your game
            character. Standing by this philosophy, we've built a headset with
            THX Spatial Audio to bring 360" positional sound, giving you greater
            spatial awareness. We've also added ergonomic design features to
            make this one of the most comfortable daily drivers for gaming. This
            is the Razer Nari.
          </p>
          <div className="razer-chroma">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="right-content">
          <img src={RazerNariLogo} alt="" className="razer-nari-logo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
