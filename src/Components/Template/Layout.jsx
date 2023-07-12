import React from "react";
import Footer from "../Molecule/Footer";
import NavB from "../Molecule/Nav/NavBar";
import LandingPage from "../Organism/LandingPage";

const Layout = () => {
  return (
    <div>
      <NavB />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Layout;
