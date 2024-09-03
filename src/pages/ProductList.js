// This page for displaying each type of product's product list. (e.g. hotel's product list. )

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DetailedProductCard from "../components/DetailedProductCard";
import productsLink from "../assets/content/productsLink.json";

const ProductList = () => {
  const { type, productType } = useParams(); // Get type, productType from url
  const { t } = useTranslation("products"); // Product details contents in japanese and english
  const [thumbNailPath, setThumbNailPath] = useState([]); // Product thumbnail images path
  const [coverImagePath, setCoverImagePath] = useState(); // Product cover image path

  // For sidebar menu
  const sideBarData = Object.keys(productsLink.allProducts).map((key) => {
    const productType = productsLink.allProducts[key];
    return {
      type: productType.type,
      subMenu: productType.productCard.map((card) => ({
        id: card.id,
        url: card.url,
      })),
    };
  });

  // For product list.
  const productsData = productsLink.allProducts[type].productCard.find(
    (element) => element.id === productType
  ).products;
  console.log("xxx", productsData);

  // For product card content in English and Japanese
  const productCards = t(`productType.${productType}.products`);

  // For products images
  useEffect(() => {
    let isMounted = true; // Flag to check if component is still mounted

    // Function to load cover image for each type product
    const loadCoverImage = async () => {
      try {
        const module = await import(
          `../assets/images/detailImg/${type}/${productType}/cover/cover.png`
        );
        setCoverImagePath(module.default);
      } catch (error) {
        console.error("Failed to load cover image", error);
        setCoverImagePath(`${process.env.PUBLIC_URL}/NoImageFound.png`);
      }
    };

    // Function to load thumbnail images for all products
    const loadThumbnails = async () => {
      if (productsData) {
        const productImages = {};

        // Loop through each product and load its thumbnails
        for (let product of productsData) {
          const promises = product.thumbNails.map((thumb) =>
            import(
              `../assets/images/detailImg/${type}/${productType}/${product.id}/thumbNail/${thumb.name}`
            )
              .then((module) => ({ id: thumb.id, path: module.default }))
              .catch((error) => {
                console.error("Failed to load thumbnail", error);
                return {
                  id: thumb.id,
                  path: `${process.env.PUBLIC_URL}/NoImageFound.png`,
                };
              })
          );

          const thumbnails = await Promise.all(promises);
          productImages[product.id] = thumbnails.reduce(
            (acc, thumb) => ({
              ...acc,
              [thumb.id]: thumb.path,
            }),
            {}
          );
        }

        // Update state with all loaded thumbnail images
        if (isMounted) {
          setThumbNailPath(productImages);
        }
      }
    };

    loadCoverImage();
    loadThumbnails();

    return () => {
      isMounted = false; // Set the flag as false when the component unmounts
    };
  }, [type, productType, productsData]);

  console.log("vv", thumbNailPath["hotel_product"]);

  return (
    <div className="w-full bg-navbarcolor relative ">
      <div className="hidden lg:block lg:relative lg:w-full">
        <img
          src={coverImagePath}
          alt="cover image"
          className="w-full h-[509px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto py-[48px] px-3.5 sm:px-16 lg:px-32">
          <h1 className="text-white">
            {t(`productType.${productType}.title`)}
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto lg:pt-[96px] lg:pb-[192px] px-3.5 sm:px-16 lg:px-32">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <div className="flex flex-col h-full">
              {sideBarData.map((menu, index) => {
                if (index === 0) {
                  return (
                    <div key={index}>
                      <h3 className="font-semibold mb-[24px] text-xl">
                        {t(`productType.${menu.type}`)}
                      </h3>
                      <div className="flex flex-col">
                        {menu.subMenu.map((item, index) => {
                          return (
                            <Link
                              to={item.url}
                              className="mb-[24px]"
                              key={index}
                            >
                              <span
                                className={`border-b-2 ${
                                  productType === item.id
                                    ? "border-hoverColor"
                                    : "border-none"
                                }`}
                              >
                                {t(`productType.${item.id}.title`)}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="mt-[96px]" key={index}>
                      <h3 className="font-semibold mb-[24px] text-xl">
                        {t(`productType.${menu.type}`)}
                      </h3>
                      <div className="flex flex-col">
                        {menu.subMenu.map((item, index) => {
                          return (
                            <Link
                              to={item.url}
                              className="mb-[24px]"
                              key={index}
                            >
                              <span
                                className={`border-b-2 ${
                                  productType === item.id
                                    ? "border-hoverColor"
                                    : "border-none"
                                }`}
                              >
                                {t(`productType.${item.id}.title`)}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="text-center col-span-12 lg:hidden mb-[64px]">
            <h1 className="inline-block relative">
              {t(`productType.${productType}.title`)}
              <span
                className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/2 h-1 bg-gray-300"
                style={{ top: "100%" }}
              ></span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-10 lg:col-start-3">
            <div className="grid-cols-2 justify-center grid lg:grid-cols-12 gap-2 lg:gap-4">
              {productsData.map((product, index) => {
                if (index === productsData.length - 1) {
                  return (
                    <DetailedProductCard
                      key={index}
                      productTitle={productCards[product.id]?.title}
                      productDes={{
                        title: productCards[product.id]?.materialText,
                        content: productCards[product.id]?.meterial,
                      }}
                      productImg_1={thumbNailPath[product.id]?.thumbNail1}
                      productImg_2={thumbNailPath[product.id]?.thumbNail2}
                      productURL={product.url}
                      className={"justify-self-end"}
                    />
                  );
                }
                if (index === 0) {
                  return (
                    <DetailedProductCard
                      key={index}
                      productTitle={productCards[product.id]?.title}
                      productDes={{
                        title: productCards[product.id]?.materialText,
                        content: productCards[product.id]?.meterial,
                      }}
                      productImg_1={thumbNailPath[product.id]?.thumbNail1}
                      productImg_2={thumbNailPath[product.id]?.thumbNail2}
                      productURL={product.url}
                      className={"justify-self-end"}
                    />
                  );
                } else {
                  return (
                    <DetailedProductCard
                      key={index}
                      productTitle={productCards[product.id].title}
                      productDes={{
                        title: productCards[product.id]?.materialText,
                        content: productCards[product.id]?.meterial,
                      }}
                      productImg_1={thumbNailPath[product.id]?.thumbNail1}
                      productImg_2={thumbNailPath[product.id]?.thumbNail2}
                      productURL={product.url}
                      className={""}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
