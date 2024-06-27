import React from "react";

const ProductCard = ({productTitle, productImage, style}) => {
  return (
    <div className={`mx-auto w-full h-[580px] border-2 ${style}`}>
      {productTitle}
    </div>
  );
};

export default ProductCard;
