import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./productCard";
import useScreenHeight from "../utils/hooks/useScreenHeight";

import productsLink from "../assets/content/productsLink.json";

const ApparelProducts = () => {
  const smallScreenHeight = useScreenHeight(600);
  const [thumbNailPath, setThumbNailPath] = useState({});
  const productsData = productsLink?.allProducts["apparel"]?.productCard;
  const { t } = useTranslation("products");

  useEffect(() => {
    const loadThumbnails = async () => {
      if (productsData) {
        let newProductImages = {};

        for (let productType of productsData) {
          let productTypeThumbnails = {};

          for (let category of productType.category) {
            const promises = category.thumbNails.map(async (thumb) => {
              try {
                const module = await import(
                  `../assets/images/detailImg/apparel/${productType.id}/${category.id}/thumbnail/${thumb.name}`
                );
                return { id: thumb.id, path: module.default };
              } catch (error) {
                console.error("Failed to load thumbnail", error);
                return {
                  id: thumb.id,
                  path: `${process.env.PUBLIC_URL}/NoImageFound.png`,
                };
              }
            });

            const thumbnails = await Promise.all(promises);
            const categoryThumbnails = thumbnails.reduce(
              (acc, thumb) => ({
                ...acc,
                [thumb.id]: thumb.path,
              }),
              {}
            );

            productTypeThumbnails[category.id] = categoryThumbnails;
          }

          newProductImages[productType.id] = productTypeThumbnails;
        }

        setThumbNailPath((prevState) => ({
          ...prevState,
          ...newProductImages,
        }));
      }
    };

    loadThumbnails();
  }, [productsData]);

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
          <div
            className="max-w-[756px] mx-auto
              flex flex-col flex-wrap items-center mt-8 gap-6 
              md:flex-row md:justify-center md:mt-0 md:gap-8"
          >
            {productsLink.allProducts.apparel.productCard.map(
              (productCard, index) => (
                <ProductCard
                  key={index}
                  type={productCard.type}
                  productType={productCard.id}
                  productCategory={productCard.category[0].id}
                  productTitle={t(`productType.${productCard.id}.title`)}
                  productImage={
                    thumbNailPath[productCard.id]?.[productCard.category[0].id]
                      ?.thumbNail
                  }
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
