const DetailedProductCard = ({
  productTitle,
  productDes,
  productImg_1,
  productImg_2,
  className,
}) => {
  return (
    <div
      className={`${className} mb-[32px] max-w-[190px] lg:max-w-full lg:w-full h-[300px] lg:h-[200px] lg:col-span-6 border-2 flex flex-col lg:flex-row cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-400 ease-in-out rounded overflow-hidden`}
    >
      <div className="w-full lg:w-[48%] h-full border-2">
        <img src={productImg_1} className="w-full h-full object-cover" />
      </div>
      <div className="w-full lg:w-[52%] h-full bg-white">
        <div className="w-full h-[128px] lg:py-3 lg:pl-3 lg:pr-10">
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
