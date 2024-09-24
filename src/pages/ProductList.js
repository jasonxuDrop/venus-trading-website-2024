// This page for displaying each type of product's product list. (e.g. hotel's product list. )

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DetailedProductCard from "../components/DetailedProductCard";
import productsLink from "../assets/content/productsLink.json";

const ProductList = () => {
  const { type, productType, productCategory } = useParams(); // Get type, productType from url
  const navigate = useNavigate();
  const { t } = useTranslation("products"); // Product details contents in japanese and english
  const [thumbNailPath, setThumbNailPath] = useState([]); // Product thumbnail images path
  const [coverImagePath, setCoverImagePath] = useState(); // Product cover image path

  // For sidebar menu
  // const sideBarData = Object.keys(productsLink.allProducts).map((key) => {
  //   const productType = productsLink.allProducts[key];
  //   return {
  //     type: productType.type,
  //     subMenu: productType.productCard.map((card) => ({
  //       id: card.id,
  //       url: card.url,
  //     })),
  //   };
  // });

  useEffect(() => {
    if (!validateParameters()) {
      console.log("Invalid type or productType, redirecting...");
      navigate("/404", { replace: true });
      return;
    }
  }, [type, productType, navigate]);

  const validateParameters = () => {
    const hasType = productsLink.allProducts.hasOwnProperty(type);
    if (!hasType) {
      return false;
    } else {
      const productTypeObject = productsLink.allProducts[
        type
      ]?.productCard.find((card) => card.id === productType);
      if (!productTypeObject) {
        return false;
      } else {
        if (productCategory) {
          const categoryObject = productTypeObject.category?.find(
            (cat) => cat.id === productCategory
          );
          return (
            categoryObject &&
            categoryObject.products &&
            categoryObject.products.length > 0
          );
        } else if (!productCategory && type === "linen") {
          return false;
        }
      }
    }

    return true;
  };

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
        for (let product of products) {
          const promises = product?.thumbNails?.map((thumb) =>
            import(
              `../assets/images/detailImg/${type}/${productType}/${productCategory}/${product.id}/${thumb.name}`
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

    if (validateParameters()) {
      loadCoverImage();
      loadThumbnails();
    }

    return () => {
      isMounted = false; // Set the flag as false when the component unmounts
    };
  }, [navigate, type, productType, productCategory]);

  // For product list.
  const productsData = validateParameters()
    ? productCategory
      ? productsLink.allProducts[type]?.productCard
          .find((element) => element.id === productType)
          .category?.filter((element) => element.id === productCategory)
      : productsLink.allProducts[type]?.productCard.find(
          (element) => element.id === productType
        )
    : [];
  console.log("xxx", productsData);

  // For product card content in English and Japanese
  const productCards = productCategory
    ? t(`productType.${productType}.category.${productCategory}.products`)
    : t(`productType.${productType}.products`);

  console.log("vvvvv", productCards);

  // For product card rendering
  const products = validateParameters()
    ? productCategory
      ? productsData[0]?.products
      : productsData?.products
    : [];

  console.log("xc", products);

  console.log("vv", thumbNailPath);

  return (
    <div className="w-full bg-navbarcolor relative ">
      <div className="hidden lg:block lg:relative lg:w-full">
        <img
          src={coverImagePath}
          alt="cover image"
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto py-[48px] px-3.5 sm:px-16 lg:px-32">
          <h2 className="text-white">
            {t(`productType.${productType}.title`)}
          </h2>
          {productCategory && (
            <h1 className="text-white">
              {t(
                `productType.${productType}.category.${productCategory}.title`
              )}
            </h1>
          )}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto lg:pt-[96px] lg:pb-[192px] px-3.5 sm:px-16 lg:px-32">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="text-center col-span-12 lg:hidden mb-[12px]">
            <h1 className="inline-block relative">
              {t(`productType.${productType}.title`)}
              <span
                className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/2 h-1 bg-gray-300"
                style={{ top: "100%" }}
              ></span>
            </h1>
          </div>

          <div className="text-center col-span-12 lg:hidden mb-[64px]">
            <h2 className="inline-block relative">
              {t(
                `productType.${productType}.category.${productCategory}.title`
              )}
              <span
                className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/2 h-1 bg-gray-300"
                style={{ top: "100%" }}
              ></span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-12 lg:col-start-1">
            <div className="grid-cols-2 justify-center grid lg:grid-cols-12 gap-8 lg:gap-6">
              {products?.map((product, index) => {
                const productCardProps = {
                  key: product?.id,
                  productTitle: productCards[product.id]?.title,
                  productDes: {
                    title: productCards[product.id]?.materialText,
                    content: productCards[product.id]?.meterial,
                  },
                  productImg_1: thumbNailPath[product.id]?.thumbNail1,
                  productImg_2: thumbNailPath[product.id]?.thumbNail2,
                  productURL: product.url,
                  className: index % 2 === 0 ? "justify-self-end" : "",
                };

                return <DetailedProductCard {...productCardProps} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
