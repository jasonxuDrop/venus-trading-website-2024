import React from "react";

const ProductCard = ({ productTitle, productDes, productImage, style }) => {
  return (
    <div className={`mx-auto w-full h-[450px] border-2 cursor-pointer hover:shadow-xl transition-shadow duration-400 ease-in-out ${style}`}>
      <div className="w-full, h-[60%] bg-gray-200 border-3"></div>
      <div className="w-full, h-[40%] flex items-center justify-center">
        <div className="">
          <h4 className="mx-auto text-center">{productTitle}</h4>
          <p className="text-center">Gown, Pajama, Bathrobe, Bedding, Towel</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
