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
      className={`max-w-screen-xl mx-auto px-6 sm:px-16 lg:px-32 ${
        smallScreenHeight ? "" : ""
      } flex flex-col justify-center`}
    >
      <div className="text-center mb-8">
        <h2 className="inline-block relative">
          {t(`productType.${productsLink.allProducts.linen.id}`)}
          <span
            className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/3 h-1 bg-buttonColor"
            style={{ top: "100%" }}
          ></span>
        </h2>
      </div>

      <div className="relative grid grid-cols-12 gap-4 first:mt-0">
        {productsLink.allProducts.linen.productCard.map((category, index) => {
          return (
            <>
            <div className="col-span-12 
            flex flex-col mt-16
            md:flex-row">
              <div className="flex-none
              w-full text-center
              md:w-60 md:text-left md:mr-7 md:my-0">
                <h3>{t(`productType.${category.id}.title`)}</h3>
              </div>
              <div className="w-full
              flex flex-col flex-wrap items-center mt-8 gap-6 
              md:flex-row md:justify-start md:mt-0 md:gap-8">
                {category.category.map((productCard, index) => {
                  if (index < category.category.length - 1) {
                    return (
                      <ProductCard
                        type={category.type}
                        productType={category.id}
                        productCategory={productCard.id}
                        productTitle={t(
                          `productType.${category.id}.category.${productCard.id}.title`
                        )}
                        productDes={``}
                        // className={
                        //   "col-span-12 mb-[64px] md:col-span-4 lg:mb-0 lg:col-span-3"
                        // }
                      />
                    );
                  } else {
                    return (
                      <ProductCard
                        type={category.type}
                        productType={category.id}
                        productCategory={productCard.id}
                        productTitle={t(
                          `productType.${category.id}.category.${productCard.id}.title`
                        )}
                        productDes={t(
                          `productType.${category.id}.category.${productCard.id}.des`
                        )}
                        // className={"col-span-12 md:col-span-4 lg:col-span-3"}
                      />
                    );
                  }
                })}
              </div>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LinedenProducts;
