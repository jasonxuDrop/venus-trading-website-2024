/**
 *  This is the product page.
 */

import React from "react";
import ProductCard from "./productCard";
import useScreenHeight from "../utils/hooks/useScreenHeight";

const LinedenProducts = () => {
  const smallScreenHeight = useScreenHeight(600);

  return (
    <div
      className={`max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 ${
        smallScreenHeight ? "" : ""
      } flex flex-col justify-center`}
    >
      <div className="text-center mb-[96px]">
        <h2 className="inline-block relative">
          Linent Products
          <span
            className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/3 h-1 bg-buttonColor"
            style={{ top: "100%" }}
          ></span>
        </h2>
      </div>

      <div className="relative grid grid-cols-12 gap-4">
        <ProductCard
          productType={"hotel"}
          productTitle={"Hotel Linen"}
          productDes={`Gown, Pajama, Bathrobe,
Bedding, Towel`}
          className={"col-span-12 mb-[64px] lg:mb-0 lg:col-span-3"}
        />
        <ProductCard
          productType={"hotSpring"}
          productTitle={"Onsen Ryokan"}
          productDes={`Yukata, Indoor Wear, Haori, Sauna Clothes`}
          className={"col-span-12 mb-[64px] lg:mb-0 lg:col-span-3"}
        />
        <ProductCard
          productType={"hospital"}
          productTitle={"Hospital"}
          productDes={`Patient Clothes, Undergarments, etc.`}
          className={"col-span-12 mb-[64px] lg:mb-0 lg:col-span-3"}
        />
        <ProductCard
          productType={"fabric"}
          productTitle={"Fabric"}
          productDes={``}
          className={"col-span-12 lg:col-span-3"}
        />
      </div>
    </div>
  );
};

export default LinedenProducts;
