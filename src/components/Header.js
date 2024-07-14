/**
 *  This is a nav bar componnent, both PC and Mobile view.
 */

import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo/Logo Icon.png";
import useScrollDetection from '../utils/hooks/useScrollDetection';

const Header = ({ isSticky }) => {
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

  const location = useLocation(); 
  const isScrolledPast = useScrollDetection('hero');
  console.log("xxx", isScrolledPast);

  return (
    <nav className={`top-0 z-50 bg-navbarcolor text-textcolor transition-opacity duration-500 ease-in-out ${isScrolledPast ? "sticky opacity-100" : "relative"}`}>
      <div className="max-w-7xl mx-auto px-3.5 sm:px-16 lg:px-32">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="Logo" className="h-[auto] w-[48px] mr-2" />
              <h4 className="font-medium">Weifang SevenUp</h4>
            </div>
          </a>
          <div className="hidden lg:flex justify-end flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-6 cursor-pointer group">
                <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                  Home
                </span>
              </a>
              <a href="/about" className="px-3 py-6  cursor-pointer group">
                <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                  About
                </span>
              </a>
              <div className="group relative">
                <button
                  className="px-3 py-6 flex items-center"
                  onMouseEnter={() => setIsLindenMenuOpen(true)}
                  onMouseLeave={() => setIsLindenMenuOpen(false)}
                  aria-expanded={isLindenMenuOpen}
                >
                  <a href="/linedenProducts">
                    <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                      Linden Products
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
                <div
                  className={`absolute bg-white w-[199px] z-10 ${
                    isLindenMenuOpen ? "block" : "hidden"
                  }`}
                  onMouseEnter={() => setIsLindenMenuOpen(true)}
                  onMouseLeave={() => setIsLindenMenuOpen(false)}
                  style={{}}
                >
                  <a
                    href="/productList/hotel"
                    className="block text-left px-3 py-1 pt-4 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Hotel
                    </span>
                  </a>
                  <a
                    href="/productList/hotSpring"
                    className="block text-left px-3 py-1 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Hot Spring Resort
                    </span>
                  </a>
                  <a
                    href="/productList/hospital"
                    className="block text-left px-3 py-1 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Hospital
                    </span>
                  </a>
                  <a
                    href="/productList/fabric"
                    className="block text-left px-3 py-1 pb-4 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Fabric
                    </span>
                  </a>
                </div>
              </div>
              <div className="group relative">
                <button
                  className="px-3 py-6  flex items-center"
                  onMouseEnter={() => setIsApparelMenuOpen(true)}
                  onMouseLeave={() => setIsApparelMenuOpen(false)}
                  aria-expanded={isApparelMenuOpen}
                >
                  <a href="/apparelProducts">
                    <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                      Apparel Products
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
                  <a
                    href="/productList/apron"
                    className="block text-left px-3 py-1 pt-4 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Apron
                    </span>
                  </a>
                  <a
                    href="/productList/pajama"
                    className="block text-left px-3 py-1 pb-4 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Pajama
                    </span>
                  </a>
                </div>
              </div>
              <a href="/contactMe" className="px-3 py-6  cursor-pointer group">
                <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                  Contact
                </span>
              </a>
              <a href="/" className="px-3 py-6 cursor-pointer group">
                <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                  日本语
                </span>
              </a>
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
            <a href="/">
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
            <a
              href="/"
              className="text-textcolor text-center block px-3 pt-8 pb-1"
              onClick={closeAllMenus}
            >
              <h2 className="border-transparent hover:border-hoverColor">
                Home
              </h2>
            </a>
            <a
              href="/about"
              className="text-textcolor text-center block px-3 pv-1"
              onClick={closeAllMenus}
            >
              <h2 className="border-transparent hover:border-hoverColor">
                About
              </h2>
            </a>
            <div>
              <div className="text-textcolor w-full text-center block px-3 pb-1 flex justify-center items-center">
                <a href="/linedenProducts">
                  <h2 className="border-transparent hover:border-hoverColor">
                    Linden Products
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
                  <a
                    href="/productList/hotel"
                    className="text-textcolor text-center block px-4 py-1"
                    onClick={closeAllMenus}
                  >
                    <h3 className="border-transparent hover:border-hoverColor">
                      Hotel
                    </h3>
                  </a>
                  <a
                    href="/productList/hotSpring"
                    className="text-textcolor text-center block px-4 py-1"
                    onClick={closeAllMenus}
                  >
                    <h3 className="border-transparent hover:border-hoverColor">
                      Hot Spring Resort
                    </h3>
                  </a>
                  <a
                    href="/productList/hospital"
                    className="text-textcolor text-center block px-4 py-1"
                    onClick={closeAllMenus}
                  >
                    <h3 className="border-transparent hover:border-hoverColor">
                      Hospital
                    </h3>
                  </a>
                  <a
                    href="/productList/fabric"
                    className="text-textcolor text-center block px-4 py-1"
                    onClick={closeAllMenus}
                  >
                    <h3 className="border-transparent hover:border-hoverColor">
                      Fabric
                    </h3>
                  </a>
                </div>
              )}
            </div>
            <div>
              <div className="text-textcolor w-full text-center block px-3 pb-1 flex justify-center items-center">
                <a href="/apparelProducts">
                  <h2 className="border-transparent hover:border-hoverColor">
                    Apparel Products
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
                  <a
                    href="/productList/apron"
                    className="text-textcolor text-center block px-4 py-1"
                    onClick={closeAllMenus}
                  >
                    <h3 className="border-transparent hover:border-hoverColor">
                      Apron
                    </h3>
                  </a>
                  <a
                    href="/productList/pajama"
                    className="text-textcolor text-center block px-4 py-1"
                    onClick={closeAllMenus}
                  >
                    <h3 className="border-transparent hover:border-hoverColor">
                      Pajama
                    </h3>
                  </a>
                </div>
              )}
            </div>
            <a
              href="/contactMe"
              className="text-textcolor text-center block px-3 pb-1"
              onClick={closeAllMenus}
            >
              <h2 className="border-transparent hover:border-hoverColor">
                Contact
              </h2>
            </a>
          </div>
        </div>

        <div className="px-3 pb-4">
          <a href="/" className="block text-left" onClick={closeAllMenus}>
            <h4 className="hover:border-hoverColor border-transparent font-bold">
              日本语
            </h4>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
