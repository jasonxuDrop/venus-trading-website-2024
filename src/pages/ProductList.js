import React from "react";
import { Link, useParams } from "react-router-dom";
import img from "../assets/images/test.png";

import DetailedProductCard from "../components/DetailedProductCard";

const ProductList = () => {
  const { productType } = useParams();

  const productTitles = {
    hotel: "Hotel Linen",
    hotSpring: "Hot Spring Resort",
    hospital: "Hospital",
    fabric: "Fabric",
    apron: "Apron",
    pajama: "Pajama",
  };

  const displayProductTitle = (productType) => {
    return productTitles[productType] || "Default Product Title";
  };

  return (
    <div className="w-full bg-navbarcolor relative ">
      <div className="hidden lg:block lg:relative lg:w-full">
        <img src={img} alt="" className="w-full h-[509px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto py-[48px] px-3.5 sm:px-16 lg:px-32">
          <h1 className="text-white">{displayProductTitle(productType)}</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto lg:pt-[96px] lg:pb-[192px] px-3.5 sm:px-16 lg:px-32">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <div className="flex flex-col h-full">
              <div className="">
                <h3 className="font-semibold mb-[24px] text-xl">
                  Linen Product
                </h3>
                <div className="flex flex-col">
                  <Link to="/productList/hotel" className="mb-[24px]">
                    <span
                      className={`border-b-2 ${
                        productType === "hotel"
                          ? "border-hoverColor"
                          : "border-none"
                      }`}
                    >
                      Hotel
                    </span>
                  </Link>
                  <Link to="/productList/hotSpring" className="mb-[24px]">
                    <span
                      className={`border-b-2 ${
                        productType === "hotSpring"
                          ? "border-hoverColor"
                          : "border-none"
                      }`}
                    >
                      Hot Spring Resort
                    </span>
                  </Link>
                  <Link to="/productList/hospital" className="mb-[24px]">
                    <span
                      className={`border-b-2 ${
                        productType === "hospital"
                          ? "border-hoverColor"
                          : "border-none"
                      }`}
                    >
                      Hospital
                    </span>
                  </Link>
                  <Link to="/productList/fabric" className="">
                    <span
                      className={`border-b-2 ${
                        productType === "fabric"
                          ? "border-hoverColor"
                          : "border-none"
                      }`}
                    >
                      Fabric
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-[96px]">
                <h3 className="font-semibold mb-4 text-xl">Apparel Product</h3>
                <div className="mt-[24px] flex flex-col">
                  <Link to="/productList/apron" className="mb-[24px]">
                    <span
                      className={`border-b-2 ${
                        productType === "apron"
                          ? "border-hoverColor"
                          : "border-none"
                      }`}
                    >
                      Apron
                    </span>
                  </Link>
                  <Link to="/productList/pajama" className="">
                    <span
                      className={`border-b-2 ${
                        productType === "pajama"
                          ? "border-hoverColor"
                          : "border-none"
                      }`}
                    >
                      Pajama
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center col-span-12 lg:hidden mb-[64px]">
            <h1 className="inline-block relative">
              {displayProductTitle(productType)}
              <span
                className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/2 h-1 bg-gray-300"
                style={{ top: "100%" }}
              ></span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-10 lg:col-start-3">
            <div className="grid-cols-2 justify-center grid lg:grid-cols-12 gap-2 lg:gap-4">
              <DetailedProductCard
                productTitle={"ベッドリネン"}
                productDes={"100% Cotton 朱子無地サテン"}
                productImg_1={img}
                className={"justify-self-end"}
              />
              <DetailedProductCard
                productTitle={"ベッドリネン"}
                productDes={"100% Cotton 朱子無地サテン"}
                productImg_1={img}
                className={""}
              />
              <DetailedProductCard
                productTitle={"ベッドリネン"}
                productDes={"100% Cotton 朱子無地サテン"}
                productImg_1={img}
                className={"justify-self-end"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
