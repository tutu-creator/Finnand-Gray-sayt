import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Process from "./components/Process/Process";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-wrapper">
        <Hero />
      </div>
      <Service />
      <Process />
      <Footer />
    </div>
  );
};

export default App;
