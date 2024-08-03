/**
 *  This is the product page.
 */

import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./productCard";
import useScreenHeight from "../utils/hooks/useScreenHeight";

import productsLink from "../assets/content/productsLink.json";

const LinedenProducts = () => {
  const smallScreenHeight = useScreenHeight(600);

  const { t } = useTranslation("products");

  return (
    <div
      className={`max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 ${
        smallScreenHeight ? "" : ""
      } flex flex-col justify-center`}
    >
      <div className="text-center mb-[96px]">
        <h2 className="inline-block relative">
          {t(`productType.${productsLink.allProducts[0].type}`)}
          <span
            className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/3 h-1 bg-buttonColor"
            style={{ top: "100%" }}
          ></span>
        </h2>
      </div>

      <div className="relative grid grid-cols-12 gap-4">
        {productsLink.allProducts[0].productCard.map((productCard, index) => {
          if (index < productsLink.allProducts[0].productCard.length - 1) {
            return (
              <ProductCard
                productType={productCard.id}
                productTitle={t(`productType.${productCard.id}.title`)}
                productDes={t(`productType.${productCard.id}.des`)}
                className={"col-span-12 mb-[64px] lg:mb-0 lg:col-span-3"}
              />
            );
          } else {
            return (
              <ProductCard
                productType={productCard.id}
                productTitle={t(`productType.${productCard.id}.title`)}
                productDes={t(`productType.${productCard.id}.des`)}
                className={"col-span-12 lg:col-span-3"}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default LinedenProducts;
