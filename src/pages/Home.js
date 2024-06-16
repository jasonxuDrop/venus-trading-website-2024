import React from "react";
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import homtImg from "../assets/images/homeImg/pexels-karolina-grabowska-4210376.png";

const Home = () => {
  return (
    <div className="w-full bg-homeBgColor h-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-5 lg:block lg:pt-[calc(100vh-300px)] text-left border-2 z-10 lg:relative absolute inset-0 flex items-center justify-center">
            <div className="">
              <h1 className="text-heading1">Weifang SevenUp</h1>
              <h4 className="text-heading4">International Trading Co.</h4>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 text-left border-2">
            <img src={homtImg} alt="" className="w-full h-[calc(100vh-75px)] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
