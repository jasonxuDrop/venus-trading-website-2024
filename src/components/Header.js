/**
 *  This is a nav bar componnent, both PC and Mobile view.
 */

import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo/Logo Icon.png";
import useScrollDetection from "../utils/hooks/useScrollDetection";

import headerLinks from "../assets/content/headerLink.json";

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
    return location.pathname === "/"
      ? isScrolledPast
        ? "sticky opacity-100"
        : "relative"
      : "sticky";
  };

  const changeLanguage = (lng) => {
    console.log("1233");
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`top-0 z-50 bg-navbarcolor text-textcolor transition-opacity duration-500 ease-in-out ${stickOrNot()}`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-16 lg:px-32">
        <div className="flex items-center justify-between relative">
          <a href="/">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="Logo" className="h-[auto] w-[48px] mr-2" />
              <h4 className="font-medium">Weifang SevenUp</h4>
            </div>
          </a>
          <div className="hidden lg:flex justify-end flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              {headerLinks.navigation.links.map((link) => {
                if (!link.subMenu && link.id !== "lang") {
                  return (
                    <a
                      href={link.url}
                      className="px-3 py-6 cursor-pointer group"
                    >
                      <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                        {t(`nav.${link.id}`)}
                      </span>
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
                          <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                            {t(`nav.${link.id}`)}
                          </span>
                        </a>
                        <svg
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                            isLindenMenuOpen ? "rotate-180" : "rotate-0"
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
                          <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                            {t(`nav.${link.id}`)}
                          </span>
                        </a>
                        <svg
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
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
                        </svg>
                      </button>
                      <div
                        className={`absolute bg-white w-[199px] z-10 ${
                          isApparelMenuOpen ? "block" : "hidden"
                        }`}
                        onMouseEnter={() => setIsApparelMenuOpen(true)}
                        onMouseLeave={() => setIsApparelMenuOpen(false)}
                      >
                        {link.subMenu.map((subLink, index) => {
                          if (index === link.subMenu.length - 1) {
                            return (
                              <a
                                href={subLink.url}
                                className="block text-left px-3 py-1 pb-4 text-mobileHeading4"
                              >
                                <span className="border-b-2 border-transparent hover:border-hoverColor">
                                  {t(`nav.${subLink.id}`)}
                                </span>
                              </a>
                            );
                          } else if (index === 0) {
                            return (
                              <a
                                href={subLink.url}
                                className="block text-left px-3 py-1 pt-4 text-mobileHeading4"
                              >
                                <span className="border-b-2 border-transparent hover:border-hoverColor">
                                  {t(`nav.${subLink.id}`)}
                                </span>
                              </a>
                            );
                          } else {
                            return (
                              <a
                                href={subLink.url}
                                className="block text-left px-3 py-1 text-mobileHeading4"
                              >
                                <span className="border-b-2 border-transparent hover:border-hoverColor">
                                  {t(`nav.${subLink.id}`)}
                                </span>
                              </a>
                            );
                          }
                        })}
                      </div>
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
                      <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                        {t(`nav.${link.id}`)}
                      </span>
                    </button>
                  );
                } else {
                  return null;
                }
              })}
            </div>

            {/* updated version dropdown part */}
            <div
              className={`absolute bg-white w-full z-10 top-[72px] ${
                isLindenMenuOpen ? "block" : "hidden"
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
                    <a
                      href={subLink.url}
                      className="block text-left px-3 py-1 pb-4 text-mobileHeading4"
                    >
                      <span className="border-b-2 border-transparent hover:border-hoverColor">
                        {t(`nav.${subLink.id}`)}
                      </span>
                    </a>
                  );
                } else if (index === 0) {
                  return (
                    <a
                      href={subLink.url}
                      className="block text-left px-3 py-1 pt-4 text-mobileHeading4"
                    >
                      <span className="border-b-2 border-transparent hover:border-hoverColor">
                        {t(`nav.${subLink.id}`)}
                      </span>
                    </a>
                  );
                } else {
                  return (
                    <a
                      href={subLink.url}
                      className="block text-left px-3 py-1 text-mobileHeading4"
                    >
                      <span className="border-b-2 border-transparent hover:border-hoverColor">
                        {t(`nav.${subLink.id}`)}
                      </span>
                    </a>
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
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform top-0 left-0 w-full h-full bg-mobileNavbarColor fixed z-50 ease-in-out duration-300 flex flex-col overflow-y-auto`}
      >
        <div className="px-3 pt-5 pb-3 sm:px-3">
          <div className="flex justify-between items-center">
            <a href="/" onClick={closeAllMenus}>
              <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="Logo" className="h-[auto] w-[50px] mr-2" />
                <h4 className="font-medium">Weifang SevenUp</h4>
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
          <div className="w-full">
            {headerLinks.navigation.links.map((link, index) => {
              if (!link.subMenu && link.id !== "lang") {
                if (index === 0) {
                  return (
                    <a
                      href={link.url}
                      className="text-textcolor text-center block px-3 pt-8 pb-1"
                      onClick={closeAllMenus}
                    >
                      <h2 className="border-transparent hover:border-hoverColor">
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
                      <h2 className="border-transparent hover:border-hoverColor">
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
                      <h2 className="border-transparent hover:border-hoverColor">
                        {t(`nav.${link.id}`)}
                      </h2>
                    </a>
                  );
                }
              } else if (link.subMenu && link.id === "linden") {
                return (
                  <div>
                    <div className="text-textcolor w-full text-center block px-3 pb-1 flex justify-center items-center">
                      <a href="/linedenProducts" onClick={closeAllMenus}>
                        <h2 className="border-transparent hover:border-hoverColor">
                          {t(`nav.${link.id}`)}
                        </h2>
                      </a>
                      <svg
                        onClick={toggleLindenMenu}
                        className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                          isLindenMenuOpen ? "rotate-180" : "rotate-0"
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
                    </div>
                    {isLindenMenuOpen && (
                      <div className="bg-mobileNavbarColor">
                        {link.subMenu.map((subLink) => {
                          return (
                            <a
                              href={subLink.url}
                              className="text-textcolor text-center block px-4 py-1"
                              onClick={closeAllMenus}
                            >
                              <h3 className="border-transparent hover:border-hoverColor">
                                {t(`nav.${subLink.id}`)}
                              </h3>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              } else if (link.subMenu && link.id === "apparel") {
                return (
                  <div>
                    <div className="text-textcolor w-full text-center block px-3 pb-1 flex justify-center items-center">
                      <a href="/apparelProducts" onClick={closeAllMenus}>
                        <h2 className="border-transparent hover:border-hoverColor">
                          {t(`nav.${link.id}`)}
                        </h2>
                      </a>
                      <svg
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
                      </svg>
                    </div>
                    {isApparelMenuOpen && (
                      <div className="bg-mobileNavbarColor">
                        {link.subMenu.map((subLink) => {
                          return (
                            <a
                              href={subLink.url}
                              className="text-textcolor text-center block px-4 py-1"
                              onClick={closeAllMenus}
                            >
                              <h3 className="border-transparent hover:border-hoverColor">
                                {t(`nav.${subLink.id}`)}
                              </h3>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="px-3 pb-4">
          <button
            className="block text-left"
            onClick={() => changeLanguage(i18n.language === "en" ? "jp" : "en")}
          >
            <h4 className="hover:border-hoverColor border-transparent font-bold">
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
      </div>
    </nav>
  );
};

export default Header;
