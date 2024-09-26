import React, { useState } from 'react';

const DetailedProductCard = ({
  productTitle,
  productDes,
  productImg_1,
  productImg_2,
  className,
  productURL
}) => {
  const [hover, setHover] = useState(false);

  const handleNavigate = () => {
    window.location.href = `${productURL}`;
  };

  return (
    <div
      className={`${className} 
        w-[190px] bg-white flex-0
        flex flex-col 
        lg:min-w-[320px] lg:h-[160px] lg:col-span-4 lg:flex-row 
        cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-400 ease-in-out 
        rounded overflow-hidden`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleNavigate}
    >
      <div className="w-full h-[190px] overflow-hidden relative 
      flex-none
      lg:w-[160px] lg:h-full">
        <img src={productImg_1} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300`} />
        {/* <img src={productImg_2} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`} /> */}
      </div>
      <div className="w-full px-4 py-8
      flex flex-col items-stretch
      ">
        {/* h-[128px] pt-[27px] pl-[4px] pr-[27px] lg:pt-[16px] lg:pl-[24px] lg:pr-[24px] */}
        <h4>{productTitle}</h4>
        <p className='text-gray-500'>
          {/* {productDes.title}: <span>{productDes.content}</span> */}
          {productDes.content}
        </p>
      </div>
    </div>
  );
};

export default DetailedProductCard;
