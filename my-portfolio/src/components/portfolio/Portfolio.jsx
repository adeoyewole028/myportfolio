import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Services from "./services/Services";
import Projects from "./projects/Projects";
import Footer from "../landingPage/Footer";
// import Map from "./map/Map";
import Inputs from "./contact/Inputs";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <div className="flex justify-around p-10">
        {/* <Map /> */}
      <Inputs />
      </div>
      <Footer />
    </div>
  );
};
export default Portfolio;
