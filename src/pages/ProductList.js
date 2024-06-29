import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/test.png";

const ProductList = () => {
  return (
    <div className="w-full bg-navbarcolor relative">
      <div className="hidden lg:block lg:relative lg:w-full">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto py-[2rem] px-3.5 sm:px-16 lg:px-32">
          <h1 className="text-white">Hotel Linen</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-[2rem] lg:py-[5rem] px-3.5 sm:px-16 lg:px-32">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="hidden lg:block lg:col-span-3">
            <div className="flex flex-col h-full">
              <div>
                <h4 className="font-bold mb-4">Linen Product</h4>
                <div className="">
                  <Link to="/">
                    <p>Hotel</p>
                  </Link>
                  <Link to="/">
                    <p>Hot Spring Resort</p>
                  </Link>
                  <Link to="/">
                    <p>Hospital</p>
                  </Link>
                  <Link to="/">
                    <p>Fabric</p>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-bold mb-4">Apparel Product</h4>
                <div className="">
                  <Link to="/">
                    <p>Apron</p>
                  </Link>
                  <Link to="/">
                    <p>Pajama</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="block col-span-12 lg:hidden">
            <h1 className="text-center">Hotel Linen</h1>
          </div>
          <div className="col-span-12 lg:col-span-9 lg:col-start-4">
            <div className="grid grid-cols-10 gap-2">
              <div className="w-full h-[220px] col-span-5 border-2">1</div>
              <div className="w-full h-[220px] col-span-5 border-2">1</div>
              <div className="w-full h-[220px] col-span-5 border-2">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
