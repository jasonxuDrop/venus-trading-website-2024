import React from "react";

const ProductCard = ({ productTitle, productDes, productImage, className }) => {
  return (
    <div
      className={`mx-auto w-full h-[450px] cursor-pointer hover:shadow-xl transition-shadow duration-400 ease-in-out ${className}`}
    >
      <div className="w-full, h-[60%] bg-gray-200"></div>
      <div className="w-full, h-[40%] bg-white flex items-center justify-center">
        <div className="">
          <div className="h-[40px]">
            <h4 className="text-center">{productTitle}</h4>
          </div>
          <div className="h-[40px]">
            <p className="text-center">{productDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
