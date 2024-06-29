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
        smallScreenHeight ? "lg:h-[calc(100vh-10rem)]" : ""
      } flex flex-col justify-center`}
    >
      <h1 className="text-heading4 text-center mb-[3rem]">Linent Products</h1>
      <div className="relative grid grid-cols-12 gap-4">
        <ProductCard
          productTitle={"Hotel Linen"}
          productDes={`Gown, Pajama, Bathrobe,
Bedding, Towel`}
          className={"col-span-12 lg:col-span-3"}
        />
        <ProductCard
          productTitle={"Onsen Ryokan"}
          productDes={`Yukata, Indoor Wear, Haori, Sauna Clothes`}
          className={"col-span-12 lg:col-span-3"}
        />
        <ProductCard
          productTitle={"Hospital"}
          productDes={`Patient Clothes, Undergarments, etc.`}
          className={"col-span-12 lg:col-span-3"}
        />
        <ProductCard
          productTitle={"Fabric"}
          productDes={``}
          className={"col-span-12 lg:col-span-3"}
        />
      </div>
    </div>
  );
};

export default LinedenProducts;
