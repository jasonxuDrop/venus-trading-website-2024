// This page for displaying each type of product's details. (e.g. some spercific product details.)

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuote } from "../context/QuoteContext";

import productsLink from "../assets/content/productsLink.json";

const ProductDetail = () => {
  const { type, productType, productCategory, productID } = useParams(); // Get type, productType, productID from url

  const [showModal, setShowModal] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false); // Track if the image has moved
  const [transformOrigin, setTransformOrigin] = useState("center");
  const [imagesPath, setImagesPath] = useState([]); // Product details images path
  const { t } = useTranslation("products"); // Product details contents in japanese and english

  const { updateQuoteDetails } = useQuote(); // For quote message context

  const handleQuoteRequest = () => {
    const details = `Hi there, \n\nI am interested in the product with the ID of ${productID} - ${productCategory} - ${productType} - ${type}, \n\nThank you so much!`;
    //navigation("/contact");
    updateQuoteDetails(details);
    window.location.href = `/contact`;
  };

  // For product details
  const productDetails = productsLink.allProducts[type].productCard
    .find((element) => element.id === productType)
    ?.category.find((element) => element.id === productCategory)
    ?.products.find((element) => element.id === productID);

  console.log("xx", productDetails);
  console.log("xxxx", imagesPath);

  // For product details content in English and Janapanes
  const details = t(
    `productType.${productType}.category.${productCategory}.products.${productID}.details`
  );
  console.log("123", details );
  console.log("456", productType +", "+ productCategory +", "+ productID );

  useEffect(() => {
    let isMounted = true; // Flag to check if component is still mounted

    document.body.style.overflow = showModal ? "hidden" : "auto";

    // Clear the previous images
    setImagesPath([]);

    // Function to load all images
    const loadImages = async () => {
      // console.log("running");
      const promises = productDetails.imgs.map((img) =>
        import(
          `../assets/images/detailImg/${type}/${productType}/${productCategory}/${productID}/${img.name}`
        )
          .then((module) => ({ id: img.id, path: module.default }))
          .catch((error) => {
            console.error("Failed to load image", error);
            return {
              id: img.id,
              path: `${process.env.PUBLIC_URL}/NoImageFound.png`,
            };
          })
      );

      // Wait for all images to be loaded
      const images = await Promise.all(promises);

      // Update state with all loaded images
      if (isMounted) {
        setImagesPath(images);
      }
    };

    // Call the function
    if (productDetails?.imgs) {
      loadImages();
    }

    return () => {
      isMounted = false; // Set the flag as false when the component unmounts
    };
  }, [type, productType, productID, productDetails]);

  const openModal = (index) => {
    setCurrentImgIndex(index);
    setShowModal(true);
    setZoomLevel(1);
    setDragPosition({ x: 0, y: 0 });
    setHasMoved(false);
    setTransformOrigin("center");
  };

  const closeModal = () => {
    setShowModal(false);
    setZoomLevel(1);
    setDragPosition({ x: 0, y: 0 });
    setTransformOrigin("center");
  };

  const nextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imagesPath.length);
    setZoomLevel(1);
    setDragPosition({ x: 0, y: 0 });
  };

  const previousImage = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex - 1 + imagesPath.length) % imagesPath.length
    );
    setZoomLevel(1);
    setDragPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (event) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: event.clientX - dragPosition.x,
        y: event.clientY - dragPosition.y,
      });
      event.preventDefault(); // Prevent default drag behavior
      setHasMoved(false);
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setHasMoved(true);
      const newPosX = event.clientX - dragStart.x;
      const newPosY = event.clientY - dragStart.y;
      setDragPosition({
        x: newPosX,
        y: newPosY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageClick = (event) => {
    if (!hasMoved) {
      if (zoomLevel === 1) {
        setZoomLevel(2.5); // Zoom in
        const rect = event.target.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setTransformOrigin(`${x}% ${y}%`);
      } else {
        setZoomLevel(1); // Reset zoom
        setDragPosition({ x: 0, y: 0 }); // Reset position
        setTransformOrigin("center");
      }
    }
  };

  return (
    <div className="pt-[64px] pb-[128px] lg:py-[192px] bg-navbarcolor">
      <div className="max-w-screen-xl mx-auto h-[auto] px-6 sm:px-16 lg:px-32">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-6 text-left">
            <img
              key={imagesPath[0]?.id}
              src={imagesPath[0]?.path}
              alt={imagesPath[0]?.alt}
              className={`h-[auto] object-cover cursor-pointer`}
              onClick={() => openModal(0)}
            />
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 text-left flex flex-col">
            <h1 className="mt-[64px] lg:mt-0">{details.title}</h1>
            <span className="mt-[16px] lg:mt-0">{details.subTitle}</span>
            <p className="mt-[16px] lg:mt-[48px]">{details.des}</p>
            <button
              type="submit"
              onClick={handleQuoteRequest}
              className="px-6 py-2 mt-[32px] lg:mt-[48px] w-40 bg-buttonColor text-black rounded shadow hover:bg-buttonHover"
            >
              {details.buttonText}
            </button>

            <div className="my-[128px] lg:my-[96px]">
              <h2 className="border-b-4 border-buttonColor">
                {details.specText}
              </h2>

              {details.specTable.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 border-b-4 py-2"
                >
                  <h4 className="col-span-1 lg:col-span-1 font-semibold text-base">
                    {item.name}
                  </h4>
                  <p className="col-span-1 lg:col-span-2">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div
          className={
            imagesPath.length <= 1
              ? "hidden"
              : "w-full mb-[128px] lg:mb-[192px]"
          }
        >
          <h2 className="lg:text-center mb-2">{details.gallery}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {imagesPath.map(
              (image, index) =>
                index > 0 && (
                  <img
                    key={image?.id}
                    alt={image?.alt}
                    src={image?.path}
                    className={`w-full h-[auto] mb-2 cursor-pointer ${
                      index === 1 ? "col-span-1 lg:col-span-2" : "col-span-1"
                    }  mb-2 lg:mb-0 `}
                    onClick={() => openModal(index)}
                  />
                )
            )}
          </div>
        </div>

        {/* Modal for full-screen image view */}
        {showModal && (
          <div
            className="fixed inset-0 bg-[#f0f2fa] flex items-center justify-center p-4 z-50"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseDown={(e) => e.preventDefault()}
          >
            <img
              key={imagesPath[currentImgIndex]?.id}
              alt={imagesPath[currentImgIndex]?.alt}
              src={imagesPath[currentImgIndex]?.path}
              className="max-w-full max-h-full"
              style={{
                cursor: isDragging
                  ? "grabbing"
                  : zoomLevel > 1
                  ? "grab"
                  : "zoom-in",
                transform: `translate(${dragPosition.x}px, ${dragPosition.y}px) scale(${zoomLevel})`,
                transformOrigin: transformOrigin,
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onClick={handleImageClick}
            />

            {/* Close button */}
            <button
              className="absolute top-[1.5rem] right-[1.5rem] bg-white text-black size-16 text-center rounded shadow"
              onClick={closeModal}
            >
              <svg
                className="m-auto w-12 h-12"
                fill="none"
                stroke="#1C1F29"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Page indicator */}
            <div
              className="absolute bottom-[1.5rem] mx-auto flex items-center p-0.5 rounded shadow
            font-tropikal text-3xl 
            bg-white text-black"
            >
              <button className="w-16 h-14 pt-2" onClick={previousImage}>
                &larr;
              </button>
              <span className="pt-2 text-center min-w-20">
                {currentImgIndex + 1}/{imagesPath.length}
              </span>
              <button className="w-16 h-14 pt-2" onClick={nextImage}>
                &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
