import React from "react";
import ProductCard from "./productCard";

const ApparelProducts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 lg:h-[calc(100vh-10rem)] flex flex-col justify-center">
      {/* Apparel Products */}
      <h1 className="text-heading4 text-center mb-[3rem]">Apparel Products</h1>
      <div className="relative grid grid-cols-12 gap-4">
        <ProductCard
          productTitle={"Apron"}
          className={"col-span-12 lg:col-span-3 lg:col-start-4"}
        />
        <ProductCard
          productTitle={"Pajama"}
          className={"col-span-12 lg:col-span-3 lg:col-start-7"}
        />
      </div>
      {/* End Apparel Products */}
    </div>
  );
};

export default ApparelProducts;
