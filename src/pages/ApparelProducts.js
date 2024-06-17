import React from "react";

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-12">
      {/* Apparel Products */}
      <h1 className="text-heading4 text-center mb-[3rem]">Apparel Products</h1>
      <div className="relative grid grid-cols-12 gap-4">
        <div className="mx-auto col-span-12 lg:col-span-3 lg:col-start-4 w-full h-[580px] border-2">
          1
        </div>
        <div className="mx-auto col-span-12 lg:col-span-3 lg:col-start-7 w-full h-[580px] border-2">
          2
        </div>
      </div>
      {/* End Apparel Products */}
    </div>
  );
};

export default Products;
