/**
 *  This is the product page.
 */

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./productCard";
import useScreenHeight from "../utils/hooks/useScreenHeight";

import productsLink from "../assets/content/productsLink.json";

const LinedenProducts = () => {
  const smallScreenHeight = useScreenHeight(600);
  const [thumbNailPath, setThumbNailPath] = useState({});
  const productsData = productsLink?.allProducts["linen"]?.productCard;
  const { t } = useTranslation("products");

  console.log("xxx", productsData);

  useEffect(() => {
    // const loadThumbnails = async () => {
    //   if (productsData) {
    //     for (let productType of productsData) {
    //       for (let category of productType.category) {
    //         const promises = category.thumbNails.map(async (thumb) => {
    //           try {
    //             const module = await import(
    //               `../assets/images/detailImg/linen/${productType.id}/${category.id}/thumbnail/${thumb.name}`
    //             );
    //             return { id: thumb.id, path: module.default };
    //           } catch (error) {
    //             console.error("Failed to load thumbnail", error);
    //             return {
    //               id: thumb.id,
    //               path: `${process.env.PUBLIC_URL}/NoImageFound.png`,
    //             };
    //           }
    //         });

    //         const thumbnails = await Promise.all(promises);
    //         const newThumbnails = thumbnails.reduce(
    //           (acc, thumb) => ({
    //             ...acc,
    //             [thumb.id]: thumb.path,
    //           }),
    //           {}
    //         );

    //         setThumbNailPath((prevPaths) => ({
    //           ...prevPaths,
    //           [category.id]: newThumbnails,
    //         }));
    //       }
    //     }
    //   }
    // };

    const loadThumbnails = async () => {
      if (productsData) {
        let newProductImages = {};

        for (let productType of productsData) {
          let productTypeThumbnails = {};

          for (let category of productType.category) {
            const promises = category.thumbNails.map(async (thumb) => {
              try {
                const module = await import(
                  `../assets/images/detailImg/linen/${productType.id}/${category.id}/thumbnail/${thumb.name}`
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

  console.log("xcz", thumbNailPath);

  return (
    thumbNailPath && (
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
          {productsLink.allProducts.linen.productCard.map(
            (productType, index) => {
              return (
                <div
                  key={index}
                  className="col-span-12 
            flex flex-col mt-16
            md:flex-row"
                >
                  <div
                    className="flex-none
              w-full text-center
              md:w-60 md:text-left md:mr-7 md:my-0"
                  >
                    <h3>{t(`productType.${productType.id}.title`)}</h3>
                  </div>
                  <div
                    className="w-full
              flex flex-col flex-wrap items-center mt-8 gap-6 
              md:flex-row md:justify-start md:mt-0 md:gap-8"
                  >
                    {productType.category.map((category, index) => {
                      if (index < productType.category.length - 1) {
                        return (
                          <ProductCard
                            key={index}
                            type={productType.type}
                            productType={productType.id}
                            productCategory={category.id}
                            productTitle={t(
                              `productType.${productType.id}.category.${category.id}.title`
                            )}
                            productImage={
                              thumbNailPath[productType.id]?.[category.id]
                                ?.thumbNail
                            }
                            productDes={t(
                              `productType.${productType.id}.category.${category.id}.des`
                            )}
                            // className={
                            //   "col-span-12 mb-[64px] md:col-span-4 lg:mb-0 lg:col-span-3"
                            // }
                          />
                        );
                      } else {
                        return (
                          <ProductCard
                            key={index}
                            type={productType.type}
                            productType={productType.id}
                            productCategory={category.id}
                            productTitle={t(
                              `productType.${productType.id}.category.${category.id}.title`
                            )}
                            productImage={
                              thumbNailPath[productType.id]?.[category.id]
                                ?.thumbNail
                            }
                            productDes={t(
                              `productType.${productType.id}.category.${category.id}.des`
                            )}
                            // className={"col-span-12 md:col-span-4 lg:col-span-3"}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    )
  );
};

export default LinedenProducts;
