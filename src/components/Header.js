/**
 *  This is a nav bar componnent, both PC and Mobile view.
 */

import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo/Logo Icon.png";
import useScrollDetection from "../utils/hooks/useScrollDetection";
import { motion, useAnimation } from 'framer-motion';


import headerLinks from "../assets/content/headerLink.json";
import Underline from "./Underline";

const Header = () => {
  const { t, i18n } = useTranslation("header");

  const [isOpen, setIsOpen] = useState(false);
  const [isLindenMenuOpen, setIsLindenMenuOpen] = useState(false);
  const [isApparelMenuOpen, setIsApparelMenuOpen] = useState(false);

  const toggleLindenMenu = useCallback(() => {
    setIsLindenMenuOpen((prev) => !prev);
    setIsApparelMenuOpen(false);
  }, []);

  const toggleApparelMenu = useCallback(() => {
    setIsApparelMenuOpen((prev) => !prev);
    setIsLindenMenuOpen(false);
  }, []);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setIsLindenMenuOpen(false);
    setIsApparelMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const isScrolledPast = useScrollDetection("hero");
  const location = useLocation();

  const stickOrNot = () => {
    // not on homepage
    if (location.pathname !== "/") {
      return "sticky";
    } 
    
    // on homepage
    if (isScrolledPast) 
    {
      return "lg:bg-navbarcolor";
    } 
    return "lg:bg-transparent lg:hover:bg-navbarcolor";
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`top-0 z-50 h-[72px] bg-navbarcolor text-textcolor transition-colors duration-500 ease-in-out sticky ${stickOrNot()}`}
    >
      <div className="w-7xl mx-auto px-6 sm:px-16 lg:px-32">
        <div className="flex items-center justify-between relative">
          <a href="/">
            <div className="flex items-center flex-shrink-0 pb-0.5">
              <img src={logo} alt="Logo" className="h-[32px] w-auto mr-2" />
              <h4 className="text-base">{t(`nav.company-name`)}</h4>
            </div>
          </a>
          <div className="hidden lg:flex justify-end flex-grow">
            <div className="flex items-baseline space-x-4">
              {headerLinks.navigation.links.map((link) => {
                if (!link.subMenu && link.id !== "lang") {
                  return (
                    <a
                      href={link.url}
                      className="px-3 py-6 cursor-pointer group"
                    >
                      <Underline>
                      <span className="">
                        {t(`nav.${link.id}`)}
                      </span>
                      </Underline>
                    </a>
                  );
                } else if (link.id === "linden") {
                  return (
                    <div className="group relative">
                      <button
                        className="px-3 py-6 flex items-center"
                        onMouseEnter={() => setIsLindenMenuOpen(true)}
                        onMouseLeave={() => setIsLindenMenuOpen(false)}
                        aria-expanded={isLindenMenuOpen}
                      >
                        <a href={link.url}>
                          <Underline>
                          <span className="">
                            {t(`nav.${link.id}`)}
                          </span>
                          </Underline>
                        </a>
                        <svg
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                            isLindenMenuOpen ? "rotate-0" : "rotate-180"
                          }`}
                          fill="none"
                          stroke="#1C1F29"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  );
                } else if (link.id === "apparel") {
                  return (
                    <div className="group relative">
                      <button
                        className="px-3 py-6  flex items-center"
                        onMouseEnter={() => setIsApparelMenuOpen(true)}
                        onMouseLeave={() => setIsApparelMenuOpen(false)}
                        aria-expanded={isApparelMenuOpen}
                      >
                        <a href={link.url}>
                          <Underline>
                          <span className="">
                            {t(`nav.${link.id}`)}
                          </span>
                          </Underline>
                        </a>
                        <svg
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                            isApparelMenuOpen ? "rotate-0" : "rotate-180"
                          }`}
                          fill="none"
                          stroke="#1C1F29"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  );
                } else if (link.id === "lang") {
                  return (
                    <button
                      className="px-3 py-6 cursor-pointer group"
                      onClick={() =>
                        changeLanguage(i18n.language === "en" ? "jp" : "en")
                      }
                    >
                      <Underline>
                      <span className="">
                        {t(`nav.${link.id}`)}
                      </span>
                      </Underline>
                    </button>
                  );
                } else {
                  return null;
                }
              })}
            </div>

            {/* updated version dropdown part */}
            <div
              className={`absolute bg-white w-full z-10 top-[72px] grid-cols-12 py-[48px] gap-10 ${
                isLindenMenuOpen ? "grid" : "hidden"
              }`}
              onMouseEnter={() => setIsLindenMenuOpen(true)}
              onMouseLeave={() => setIsLindenMenuOpen(false)}
              style={{}}
            >
              {headerLinks.navigation.links[2].subMenu.map((subLink, index) => {
                if (
                  index ===
                  headerLinks.navigation.links[2].subMenu.length - 1
                ) {
                  return (
                    <div className="col-span-2">
                      <p
                        href={subLink.url}
                        className="text-mobileHeading4 text-hoverColor mb-[4px] cursor-default select-none"
                      >
                        {t(`nav.${subLink.id}`)}
                      </p>
                      <div className="flex flex-col items-start">
                        {subLink.category.map((cate, index) => {
                          return (
                            <a href={cate.url} key={index} className="mb-[4px]">
                              <Underline>
                              <span className="">
                                {t(`nav.${cate.id}`)}
                              </span>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else if (index === 0) {
                  return (
                    <div className="col-span-2 col-start-3">
                      <p
                        href={subLink.url}
                        className="text-mobileHeading4 text-hoverColor mb-[4px] cursor-default select-none"
                      >
                        {t(`nav.${subLink.id}`)}
                      </p>
                      <div className="flex flex-col items-start">
                        {subLink.category.map((cate, index) => {
                          return (
                            <a href={cate.url} key={index} className="mb-[4px]">
                              <Underline>
                              <span className="">
                                {t(`nav.${cate.id}`)}
                              </span>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-span-2">
                      <p
                        href={subLink.url}
                        className="text-mobileHeading4 text-hoverColor mb-[4px] cursor-default select-none"
                      >
                        {t(`nav.${subLink.id}`)}
                      </p>
                      <div className="flex flex-col items-start">
                        {subLink.category.map((cate, index) => {
                          return (
                            <a href={cate.url} key={index} className="mb-[4px]">
                              <Underline>
                              <span className="">
                                {t(`nav.${cate.id}`)}
                              </span>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div
              className={`absolute bg-white w-full z-10 top-[72px] grid grid-cols-12 py-[48px] gap-10 ${
                isApparelMenuOpen ? "grid" : "hidden"
              }`}
              onMouseEnter={() => setIsApparelMenuOpen(true)}
              onMouseLeave={() => setIsApparelMenuOpen(false)}
            >
              {headerLinks.navigation.links[3].subMenu.map((subLink, index) => {
                if (
                  index ===
                  headerLinks.navigation.links[3].subMenu.length - 1
                ) {
                  return (
                    <div className="col-span-2">
                      <h4
                        href={subLink.url}
                        className="text-mobileHeading4 text-hoverColor mb-[4px] cursor-default select-none"
                      >
                        {t(`nav.${subLink.id}`)}
                      </h4>
                      <div className="flex flex-col items-start">
                        {subLink.category.map((cate, index) => {
                          return (
                            <a href={cate.url} className="mb-[4px]">
                              <Underline>
                              <span className="">
                                {t(`nav.${cate.id}`)}
                              </span>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else if (index === 0) {
                  return (
                    <div className="col-span-2 col-start-3">
                      <h4
                        href={subLink.url}
                        className="text-mobileHeading4 text-hoverColor mb-[4px] cursor-default select-none"
                      >
                        {t(`nav.${subLink.id}`)}
                      </h4>
                      <div className="flex flex-col items-start">
                        {subLink.category.map((cate, index) => {
                          return (
                            <a href={cate.url} className="mb-[4px]">
                              <Underline>
                              <span className="">
                                {t(`nav.${cate.id}`)}
                              </span>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-span-2">
                      <h4 href={subLink.url} className="text-mobileHeading4">
                        {t(`nav.${subLink.id}`)}
                      </h4>
                      <div className="flex flex-col items-start">
                        {subLink.category.map((cate, index) => {
                          return (
                            <a href={cate.url}>
                              <Underline>
                              <span className=" ">
                                {t(`nav.${cate.id}`)}
                              </span>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="-mr-2 py-6 pr-2 flex lg:hidden z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-navbarcolor inline-flex items-center justify-center text-textcolor hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navbar "
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1C1F29"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view menu */}
      <motion.div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform top-0 left-0 w-full h-full bg-mobileNavbarColor fixed z-50 ease-in-out duration-300 flex flex-col overflow-y-auto
         `}
      >
        <div className="px-6 sm:px-16 py-5">
          <div className="flex justify-between items-center">
            <a href="/" onClick={closeAllMenus}>
              <div className="flex items-center flex-shrink-0 pb-0.5">
                <img src={logo} alt="Logo" className="h-[auto] w-[50px] mr-2" />
                <h4 className="text-base">{t(`nav.company-name`)}</h4>
              </div>
            </a>
            <button
              onClick={closeAllMenus}
              className="text-textcolor hover:text-white"
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
          </div>
        </div>

        <div className="flex-grow flex">
          <div className="w-full font-tropikal flex flex-col gap-6">
            {headerLinks.navigation.links.map((link, index) => {
              if (!link.subMenu && link.id !== "lang") {
                if (index === 0) {
                  return (
                    <a
                      href={link.url}
                      className="text-textcolor text-center block px-3 pt-8 pb-1"
                      onClick={closeAllMenus}
                    >
                      <h2 className="border-transparent text-4xl">
                        {t(`nav.${link.id}`)}
                      </h2>
                    </a>
                  );
                } else if (index === headerLinks.navigation.links.length - 2) {
                  return (
                    <a
                      href={link.url}
                      className="text-textcolor text-center block px-3 pb-1"
                      onClick={closeAllMenus}
                    >
                      <h2 className="border-transparent  text-4xl">
                        {t(`nav.${link.id}`)}
                      </h2>
                    </a>
                  );
                } else {
                  return (
                    <a
                      href={link.url}
                      className="text-textcolor text-center block px-3 pv-1"
                      onClick={closeAllMenus}
                    >
                      <h2 className="border-transparent  text-4xl">
                        {t(`nav.${link.id}`)}
                      </h2>
                    </a>
                  );
                }
              } else if (link.subMenu && link.id === "linden") {
                return (
                  <div>
                    <div className="text-textcolor w-full text-center px-3 pb-1 flex justify-center items-center">
                      <a href="/linedenProducts" onClick={closeAllMenus}>
                        <h2 className="border-transparent text-4xl">
                          {t(`nav.${link.id}`)}
                        </h2>
                      </a>
                      {/* <svg
                        onClick={toggleLindenMenu}
                        className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                          isLindenMenuOpen ? "rotate-0" : "rotate-180"
                        }`}
                        fill="none"
                        stroke="#1C1F29"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        ></path>
                      </svg> */}
                    </div>
                    {/* {isLindenMenuOpen && (
                      <div className="bg-mobileNavbarColor">
                        {link.subMenu.map((subLink) => {
                          return (
                            <a
                              href={subLink.url}
                              className="text-textcolor text-center block px-4 py-1"
                              onClick={closeAllMenus}
                            >
                              <Underline>
                              <h3 className="border-transparent ">
                                {t(`nav.${subLink.id}`)}
                              </h3>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    )} */}
                  </div>
                );
              } else if (link.subMenu && link.id === "apparel") {
                return (
                  <div>
                    <div className="text-textcolor w-full text-center px-3 pb-1 flex justify-center items-center">
                      <a href="/apparelProducts" onClick={closeAllMenus}>
                        <h2 className="border-transparent  text-4xl">
                          {t(`nav.${link.id}`)}
                        </h2>
                      </a>
                      {/* <svg
                        onClick={toggleApparelMenu}
                        className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                          isApparelMenuOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="#1C1F29"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        ></path>
                      </svg> */}
                    </div>
                    {/* {isApparelMenuOpen && (
                      <div className="bg-mobileNavbarColor">
                        {link.subMenu.map((subLink) => {
                          return (
                            <a
                              href={subLink.url}
                              className="text-textcolor text-center block px-4 py-1"
                              onClick={closeAllMenus}
                            >
                            <Underline>
                              <h3 className="border-transparent">
                                {t(`nav.${subLink.id}`)}
                              </h3>
                              </Underline>
                            </a>
                          );
                        })}
                      </div>
                    )} */}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="px-6 sm:px-16 py-5">
          <button
            className="block text-left"
            onClick={() => changeLanguage(i18n.language === "en" ? "jp" : "en")}
          >
            <h4 className=" border-transparent">
              {t(
                `nav.${
                  headerLinks.navigation.links[
                    headerLinks.navigation.links.length - 1
                  ].id
                }`
              )}
            </h4>
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
