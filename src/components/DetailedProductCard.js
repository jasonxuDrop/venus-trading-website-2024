import React, { useState } from 'react';

const DetailedProductCard = ({
  productTitle,
  productDes,
  productImg_1,
  productImg_2,
  className,
}) => {
  const [hover, setHover] = useState(false);

  const handleNavigate = () => {
    window.location.href = `/productDetail`;
  };

  return (
    <div
      className={`${className} mb-[32px] max-w-[190px] lg:max-w-full lg:w-full h-[300px] lg:h-[200px] lg:col-span-6 border-2 flex flex-col lg:flex-row cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-400 ease-in-out rounded overflow-hidden`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleNavigate}
    >
      <div className="w-full lg:w-[48%] h-full border-2 overflow-hidden relative">
        <img src={productImg_1} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hover ? 'opacity-0' : 'opacity-100'}`} />
        <img src={productImg_2} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="w-full lg:w-[52%] h-full bg-white">
        <div className="w-full h-[128px] pt-[27px] pl-[4px] pr-[27px] lg:pt-[16px] lg:pl-[24px] lg:pr-[24px]">
          <h3>{productTitle}</h3>
          <p>
            素材：<span>{productDes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedProductCard;
