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
      {/* relative grid md:grid-cols-8 md:gap-8 lg:grid-cols-12 lg:gap-8 */}
      <div className="relative grid grid-cols-12 gap-4">
    <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-12 lg:col-start-0">
        <div className="flex flex-wrap">
            {productsLink.allProducts.apparel.productCard.map((productCard, index) => (
                <ProductCard
                    key={index} // Always use keys in lists for better performance
                    type={productCard.type}
                    productType={productCard.id}
                    productCategory={productCard.category[0].id}
                    productTitle={t(`productType.${productCard.id}.title`)}
                    className="md:max-w-[250px]" // Adjust widths and padding as necessary
                />
            ))}
        </div>
    </div>
</div>
      {/* End Apparel Products */}
    </div>
  );
};

export default ApparelProducts;
