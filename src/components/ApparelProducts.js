import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./productCard";
import useScreenHeight from "../utils/hooks/useScreenHeight";

import productsLink from "../assets/content/productsLink.json";

const ApparelProducts = () => {
  const smallScreenHeight = useScreenHeight(600);

  const { t } = useTranslation("products");

  return (
    <div
      className={`max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 ${
        smallScreenHeight ? "" : ""
      } flex flex-col justify-center`}
    >
      {/* Apparel Products */}
      <div className="text-center mb-[96px]">
        <h2 className="inline-block relative">
          {t(`productType.${productsLink.allProducts.apparel.id}`)}
          <span
            className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/3 h-1 bg-buttonColor"
            style={{ top: "100%" }}
          ></span>
        </h2>
      </div>
      <div className="relative grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-12 lg:col-start-0">
          <div className="max-w-[756px] mx-auto
              flex flex-col flex-wrap items-center mt-8 gap-6 
              md:flex-row md:justify-center md:mt-0 md:gap-8">
            {productsLink.allProducts.apparel.productCard.map(
              (productCard, index) => (
                <ProductCard
                  key={index}
                  type={productCard.type}
                  productType={productCard.id}
                  productCategory={productCard.category[0].id}
                  productTitle={t(`productType.${productCard.id}.title`)}
                  // className="md:max-w-[200px] flex-shrink-0"
                />
              )
            )}
          </div>
        </div>
      </div>
      {/* End Apparel Products */}
    </div>
  );
};

export default ApparelProducts;
