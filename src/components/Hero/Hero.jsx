import React from "react";
import "./Hero.css";
import Finn from "../../assets/finn-and-gray-website-custom-e1768340922115.jpg";

const Hero = () => {
  return (
    <section>
      <h1>OUR SERVICES</h1>
      <h2>Custom logos, websites, and photography—built for home services brands</h2>
      <img className="finn" src={Finn} alt="Website custom" />
    </section>
  );
};

export default Hero;
