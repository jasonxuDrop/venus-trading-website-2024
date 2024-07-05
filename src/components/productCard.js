import React from "react";

const ProductCard = ({ productTitle, productDes, productImage, className }) => {
  return (
    <div
      className={`mx-auto w-full h-[450px] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-400 ease-in-out ${className}`}
    >
      <div className="w-full, h-[60%] bg-gray-200"></div>
      <div className="w-full, h-[40%] bg-white flex items-center justify-center">
        <div className="">
          <div className="h-[40px]">
            <h4 className="text-center">{productTitle}</h4>
          </div>
          <div className="h-[40px] px-2">
            <p className="text-center text-gray-500">{productDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
