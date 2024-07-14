import React from "react";

const ProductCard = ({
  productType,
  productTitle,
  productDes,
  productImage,
  className,
}) => {
  const handleNavigate = () => {
    window.location.href = `/productList/${productType}`;
  };

  return (
    <div
      className={`mx-auto w-full max-w-[270px] h-[450px] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-400 ease-in-out rounded overflow-hidden ${className}`}
      onClick={handleNavigate}
    >
      <div className="w-full h-[60%] bg-gray-200"></div>
      <div className="w-full h-[40%] bg-white flex items-center justify-center">
        <div className="">
          <div className="h-[auto]">
            <h4 className="text-center">{productTitle}</h4>
          </div>
          <div className="h-[40px] px-6">
            <p className="text-center text-gray-500">{productDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
