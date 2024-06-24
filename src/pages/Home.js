import React from "react";
import homtImg from "../assets/images/homeImg/hero-image.jpg";
import logo from "../assets/images/logo/Logo Icon@4x 1.png";

import About from "./About";
import LinedenProducts from "./LinedenProducts";
import ApparelProducts from "./ApparelProducts";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto bg-homeBgColor">
        {/* Home */}
        <div className="max-w-screen-xl mx-auto sm:px-0 lg:px-12">
          <div className="relative grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-5 lg:block lg:pt-[calc(100vh-18.75rem)] lg:text-left text-center border-2 lg:relative absolute inset-0 flex items-center justify-center transform -translate-y-1/4 lg:translate-y-0">
              <div className="">
                <img
                  src={logo}
                  alt="company logo"
                  className="block mx-auto w-[112px] h-auto lg:hidden "
                />
                <h1 className="text-mobileHeading1 lg:text-5xl">
                  Weifang SevenUp
                </h1>
                <span className="">International Trading Co.</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 text-left border-2">
              <img
                src={homtImg}
                alt=""
                className="w-full h-[calc(100vh-50px)] lg:h-[calc(100vh-72px)] object-cover"
              />
            </div>
          </div>
        </div>
        {/* End Home */}
      </div>
      {/* About */}
      <div className="py-[5rem]" id="about">
        <About />
      </div>
      {/* End About */}

      {/* Product */}
      <div className="py-[5rem]" id="lineden">
        <LinedenProducts />
      </div>

      <div className="py-[5rem]" id="apparel">
        <ApparelProducts />
      </div>
      {/* End Product */}
    </>
  );
};

export default Home;
