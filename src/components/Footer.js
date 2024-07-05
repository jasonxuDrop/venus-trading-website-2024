import React from "react";
import logo from "../assets/images/logo/Logo Full En.png";

const Footer = () => {
  return (
    <footer className="bg-footerBgColor">
      <div className="max-w-7xl mx-auto py-12 px-3.5 sm:px-16 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="sm:col-span-1 lg:col-span-2">
            <div className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-[auto] w-[70%] lg:w-full mr-2"
              />
              <div className="text-left text-textWhite"></div>
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
          <div className="sm:col-span-1 lg:col-start-4 lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="text-mobileHeading4">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="mt-4">
                <a href="/about">About us</a>
              </li>
              <li className="mt-4 block lg:hidden">
                <a href="/linedenProducts">Lineden Products</a>
              </li>
              <li className="mt-4 block lg:hidden">
                <a href="/apparelProducts">Apparel Products</a>
              </li>
              <li className="mt-4 block lg:hidden">
                <a href="/contactMe">Contact us</a>
              </li>
              <li className="mt-4">
                <a href="/">日本语</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="text-mobileHeading4">
              <li>
                <a href="/linedenProducts">Lineden Products</a>
              </li>
              <li className="mt-4">
                <a href="/linedenProducts">Hotel Linen</a>
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
          <div className="hidden lg:block lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="text-mobileHeading4">
              <li>
                <a href="/apparelProducts">Apparel Products</a>
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
        <p className="text-sm text-textWhite text-left px-3.5 lg:px-8 lg:text-center">
          © 2024 Weifang SevenUp Internation Trading Co., LTD. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
