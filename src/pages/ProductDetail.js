import React, { useState } from "react";

import testImg from "../assets/images/detailImg/product-table-linen-2 1.png";
import img1 from "../assets/images/detailImg/tablecloth1.png";
import img2 from "../assets/images/detailImg/tablecloth2.png";
import img3 from "../assets/images/detailImg/tablecloth3.png";

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState("center");
  const images = [img1, img2, img3];

  const openModal = (index) => {
    setCurrentImgIndex(index);
    setShowModal(true);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setShowModal(false);
    setZoomLevel(1);
  };

  const nextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageClick = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const x = ((offsetX / target.width) * 100).toFixed(2);
    const y = ((offsetY / target.height) * 100).toFixed(2);
    setZoomOrigin(`${x}% ${y}%`);
    setZoomLevel((prevZoom) => (prevZoom < 4 ? prevZoom + 0.5 : 1));
  };

  return (
    <div className="pt-[64px] pb-[128px] lg:py-[192px] bg-navbarcolor">
      <div className="max-w-screen-xl mx-auto h-[auto] px-3.5 sm:px-16 lg:px-32">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-6 text-left">
            <img
              src={testImg}
              alt="About"
              className={`h-[auto] object-cover`}
            />
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 text-left">
            <h1 className="mt-[64px] lg:mt-0">テーブルクロス</h1>
            <span className="mt-[16px] lg:mt-0">Nylon 80</span>
            <p className="mt-[16px] lg:mt-[48px]">
              無地、先染め、ジャガード、プリントなどのファイスタオル、バスタオル、バスマットなどの一般
              用タオル製品も、お客様に好評をいただいています。
              小ロットにも対応できます。
            </p>
            <button
              type="submit"
              className="px-6 py-2 mt-[32px] lg:mt-[48px] bg-buttonColor text-black rounded hover:bg-buttonHover"
            >
              問い合わせ
            </button>

            <div className="my-[128px] lg:my-[96px]">
              <h2 className="border-b-4 border-buttonColor">仕様</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b-4 py-2">
                <h4 className="col-span-1 lg:col-span-1 font-semibold">
                  商品名
                </h4>
                <p className="col-span-1 lg:col-span-2">ワッフル</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b-4 py-2">
                <h4 className="col-span-1 lg:col-span-1 font-semibold">素材</h4>
                <p className="col-span-1 lg:col-span-2">
                  バラ柄 <br />
                  朱子無地サテン
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b-4 py-2">
                <h4 className="col-span-1 lg:col-span-1 font-semibold">
                  カテゴリ
                </h4>
                <p className="col-span-1 lg:col-span-2">
                  ハンドタオル、フェイスタオル、バスタオルなど
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 border-b-4 py-2">
                <h4 className="col-span-1 lg:col-span-1 font-semibold">
                  カテゴリ
                </h4>
                <p className="col-span-1 lg:col-span-2">
                  バスタオル： <br />
                  バスマット： 20x30インチ
                  <br />
                  フェイスタオル：12x12インチまたは13x13インチ
                  <br />
                  ハンドタオル：16x27インチ
                  <br />
                  バスシートまたはスパシート：54x90インチ カスタムサイズ対応可
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="w-full mb-[128px] lg:mb-[192px]">
          <h2 className="lg:text-center mb-2">ギャラリー</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-full h-[auto] mb-2 cursor-pointer ${
                  index === 0 ? "col-span-1 lg:col-span-2" : "col-span-1"
                }  mb-2 lg:mb-0 `}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>

        {/* Modal for full-screen image view */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-[#f0f2fa] flex items-center justify-center z-50">
            <img
              src={images[currentImgIndex]}
              className={`w-full h-[1032px] cursor-${
                zoomLevel > 1 ? "zoom-out" : "zoom-in"
              } m-[1.5rem] object-contain`}
              style={{
                transformOrigin: zoomOrigin,
                transform: `scale(${zoomLevel})`,
              }}
              onClick={handleImageClick}
            />

            <button
              className="absolute top-[1.5rem] right-[1.5rem] bg-white text-black px-3 py-2 text-center"
              onClick={closeModal}
            >
              <svg
                className="h-8 w-8"
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

            <div className="absolute bottom-[1.5rem] left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white">
              <button className="text-black" onClick={previousImage}>
                &lt;
              </button>
              <span className="text-black">
                {currentImgIndex + 1} / {images.length}
              </span>
              <button className="text-black" onClick={nextImage}>
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
