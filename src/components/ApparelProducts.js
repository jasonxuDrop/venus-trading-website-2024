import React from "react";
import ProductCard from "./productCard";
import useScreenHeight from "../utils/hooks/useScreenHeight";

const ApparelProducts = () => {
  const smallScreenHeight = useScreenHeight(600);

  return (
    <div
      className={`max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 ${
        smallScreenHeight ? "" : ""
      } flex flex-col justify-center`}
    >
      {/* Apparel Products */}
      <div className="text-center mb-[96px]">
        <h2 className="inline-block relative">
          Apparel Products
          <span
            className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/3 h-1 bg-buttonColor"
            style={{ top: "100%" }}
          ></span>
        </h2>
      </div>

      <div className="relative grid grid-cols-12 gap-4">
        <ProductCard
          productType={"apron"}
          productTitle={"Apron"}
          className={
            "mb-[64px] lg:mb-0 col-span-12 lg:col-span-3 lg:col-start-4"
          }
        />
        <ProductCard
          productType={"pajama"}
          productTitle={"Pajama"}
          className={"col-span-12 lg:col-span-3 lg:col-start-7"}
        />
      </div>
      {/* End Apparel Products */}
    </div>
  );
};

export default ApparelProducts;
