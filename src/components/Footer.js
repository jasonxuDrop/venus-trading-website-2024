import React from "react";
import logo from "../assets/images/logo/Logo Icon@4x 1.png";

const Footer = () => {
  return (
    <footer className="bg-footerBgColor">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="Logo" className="h-[auto] w-[70px] mr-2" />
              <div className="xl:2xl:text-heading4 text-mobileHeading4 text-left text-textWhite">
                <h1 className="">Weifang SevenUp</h1>
                <h1 className="">International Trading Co.</h1>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-left text-textWhite">Telephone: 123456789</p>
              <p className=" text-left text-textWhite">Fax: 128736864901</p>
              <p className=" text-left text-textWhite">
                Address: 12356878969612 123987
              </p>
            </div>
            <div className="mt-8 flex space-x-6">
              {/* Social media links here */}
              <a href="/#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                {/* Placeholder for Facebook Icon */}
              </a>
              <a href="/#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                {/* Placeholder for Instagram Icon */}
              </a>
              {/* More social icons */}
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="xl:2xl:text-heading4 text-mobileHeading4">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="mt-4">
                <a href="/">About us</a>
              </li>
              <li className="mt-4">
                <a href="/">Contact us</a>
              </li>
              <li className="mt-4">
                <a href="/">日本语</a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-1 lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="xl:2xl:text-heading4 text-mobileHeading4">
              <li>
                <a href="/">Linen Products</a>
              </li>
              <li className="mt-4">
                <a href="/">Hotel Linen</a>
              </li>
              <li className="mt-4">
                <a href="/">Spa Resort</a>
              </li>
              <li className="mt-4">
                <a href="/">Hospital</a>
              </li>
              <li className="mt-4">
                <a href="/">Fabric</a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-1 lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="xl:2xl:text-heading4 text-mobileHeading4">
              <li>
                <a href="/">Apparel Products</a>
              </li>
              <li className="mt-4">
                <a href="/">Apron</a>
              </li>
              <li className="mt-4">
                <a href="/">Pajama</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-footerBgColor mt-4 pt-8 pb-8">
        <p className="text-sm text-textWhite text-center">
          © 2024 Weifang SevenUp Internation Trading Co., LTD. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
