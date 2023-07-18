import React from "react";
import HeroSection from "../Hero/HeroSection";
import OfficialSection from "../Official/OfficialSection";
import About from "../About/About";
import Program from "../Prog/Program";
import News from "../News/News";
import Contact from "../Contact";
import Footer from "../Molecule/Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <OfficialSection />
      <About />
      <Program />
      <News />
      <Contact />
      <Footer/>
    </div>
  );
};

export default LandingPage;
