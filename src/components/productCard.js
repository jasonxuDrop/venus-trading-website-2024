import React from "react";

const ProductCard = ({
  type,
  productType,
  productCategory,
  productTitle,
  productDes,
  productImage,
  className,
}) => {
  const handleNavigate = () => {
    window.location.href = `/productList/${type}/${productType}/${productCategory}`;
  };

  return (
    <div
      className={`
        w-full max-w-[400px] 
        cursor-pointer shadow-md 
        md:w-[165px]
        hover:shadow-lg transition-shadow duration-400 ease-in-out rounded overflow-hidden ${className}
        bg-white`}
      onClick={handleNavigate}
    >
      <div
        className="
        hidden w-full h-[165px] 
        md:block bg-gray-200
        "
      >
        <img className="w-full h-full object-cover" src={productImage} />
      </div>
      <p
        className="
      mx-3 my-6 
      text-xl text-left
      md:text-base md:text-center "
      >
        {productTitle}
      </p>
      <p className="text-center mx-3 my-6 text-gray-500">{productDes}</p>

      {/* <div className="w-full h-[40%] flex items-center justify-center">
        <div className="">
          <div className="h-[auto]">
            <h4 className="text-center">{productTitle}</h4>
          </div>
          <div className="h-[40px] px-6">
            <p className="text-center text-gray-500">{productDes}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
