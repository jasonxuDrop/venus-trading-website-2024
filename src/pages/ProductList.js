import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/test.png";

import DetailedProductCard from "../components/DetailedProductCard";

const ProductList = () => {
  return (
    <div className="w-full bg-navbarcolor relative pt-[64px] pb-[128px]">
      <div className="hidden lg:block lg:relative lg:w-full">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto py-[48px] px-3.5 sm:px-16 lg:px-32">
          <h1 className="text-white">Hotel Linen</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto lg:pt-[96px] lg:pb-[192px] px-3.5 sm:px-16 lg:px-32">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="hidden lg:block lg:col-span-2 border-red-500 border-2">
            <div className="flex flex-col h-full">
              <div className="">
                <h3 className="font-semibold mb-4 text-xl">Linen Product</h3>
                <div className="mt-[32px] border-2 flex flex-col">
                  <Link to="/" className="mb-[12px]">
                    <span className="border-b-2 border-hoverColor">Hotel</span>
                  </Link>
                  <Link to="/" className="mb-[12px]">
                    <span>Hot Spring Resort</span>
                  </Link>
                  <Link to="/" className="mb-[12px]">
                    <span>Hospital</span>
                  </Link>
                  <Link to="/" className="mb-[12px]">
                    <span>Fabric</span>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-4 text-xl">Apparel Product</h3>
                <div className="mt-[32px] border-2 flex flex-col">
                  <Link to="/" className="mb-[12px]">
                    <span>Apron</span>
                  </Link>
                  <Link to="/" className="mb-[12px]">
                    <span>Pajama</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center col-span-12 lg:hidden mb-[64px]">
            <h1 className="inline-block relative">
              Hotel Linen
              <span
                className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/2 h-1 bg-gray-300"
                style={{ top: "100%" }}
              ></span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-10 lg:col-start-3 border border-blue-500">
            <div className="grid-cols-2 justify-center grid lg:grid-cols-12 gap-2 lg:gap-4">
              <DetailedProductCard
                productTitle={"ベッドリネン"}
                productDes={"100% Cotton 朱子無地サテン"}
                productImg_1={img}
                className={"justify-self-end"}
              />
              <DetailedProductCard
                productTitle={"ベッドリネン"}
                productDes={"100% Cotton 朱子無地サテン"}
                productImg_1={img}
                className={""}
              />
              <DetailedProductCard
                productTitle={"ベッドリネン"}
                productDes={"100% Cotton 朱子無地サテン"}
                productImg_1={img}
                className={"justify-self-end"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
