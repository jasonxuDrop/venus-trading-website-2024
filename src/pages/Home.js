// This is home page. 

import React from "react";

import Hero from "../components/Hero";
import AboutComponent from "../components/AboutComponent";
import LinedenProducts from "../components/LinedenProducts";
import ApparelProducts from "../components/ApparelProducts";
import Contact from "../components/Contact";

import useScreenWidth from "../utils/hooks/useScreenWidth";

const Home = () => {

  return (
    <>
      <div className="w-full h-auto bg-homeBgColor" id="hero">
        {/* Hero */}
        <Hero />
        {/* End Hero */}
      </div>
      {/* About */}
      <div className="pt-[192px] bg-navbarcolor" id="about">
        <AboutComponent />
      </div>
      {/* End About */}

      {/* Product */}
      <div className="pt-[192px] bg-navbarcolor" id="lineden">
        <LinedenProducts />
      </div>

      <div className="pt-[192px] bg-navbarcolor" id="apparel">
        <ApparelProducts />
      </div>
      {/* End Product */}

      {/* Contact Us */}
      <div className="py-[192px] bg-navbarcolor">
        <Contact />
      </div>

      {/* End Contact Us */}
    </>
  );
};

export default Home;
