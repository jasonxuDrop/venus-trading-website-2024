/**
 *  This is the product page.
 */

import React from "react";
import ProductCard from "../components/productCard";

const LinedenProducts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 lg:h-[calc(100vh-10rem)]">
      {/* Linent Products */}
      <h1 className="text-heading4 text-center mb-[3rem]">Linent Products</h1>
      <div className="relative grid grid-cols-12 gap-4">
        <ProductCard
          productTitle={"Hotel Linen"}
          productDes={`Gown, Pajama, Bathrobe,
Bedding, Towel`}
          style={"col-span-12 lg:col-span-3"}
        />
        <ProductCard
          productTitle={"Onsen Ryokan"}
          productDes={`Yukata, Indoor Wear, Haori, Sauna Clothes`}
          style={"col-span-12 lg:col-span-3"}
        />
        <ProductCard
          productTitle={"Hospital"}
          productDes={`Patient Clothes, Undergarments, etc.`}
          style={"col-span-12 lg:col-span-3"}
        />
        <ProductCard
          productTitle={"Fabric"}
          productDes={``}
          style={"col-span-12 lg:col-span-3"}
        />
      </div>
      {/* End Linent Products */}
    </div>
  );
};

export default LinedenProducts;
