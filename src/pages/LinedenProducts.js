/**
 *  This is the product page.
 */

import React from "react";

const LinedenProducts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 lg:h-[calc(100vh-10rem)]">
      {/* Linent Products */}
      <h1 className="text-heading4 text-center mb-[3rem]">Linent Products</h1>
      <div className="relative grid grid-cols-12 gap-4">
        <div className="mx-auto col-span-12 lg:col-span-3 w-full h-[580px] border-2">
          1
        </div>
        <div className="mx-auto col-span-12 lg:col-span-3 w-full h-[580px] border-2">
          2
        </div>
        <div className="mx-auto col-span-12 lg:col-span-3 w-full h-[580px] border-2">
          3
        </div>
        <div className="mx-auto col-span-12 lg:col-span-3 w-full h-[580px] border-2">
          4
        </div>
      </div>
      {/* End Linent Products */}
    </div>
  );
};

export default LinedenProducts;
