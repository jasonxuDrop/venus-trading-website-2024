/**
 *  This is a nav bar componnent, both PC and Mobile view.
 */

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/Logo Icon.png";

const Header = () => {
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

  return (
    <nav className="bg-navbarcolor text-textcolor">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-16 lg:px-32">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="Logo" className="h-[auto] w-[70px] mr-2" />
              <h1 className="text-mobileHeading4 font-medium">Weifang SevenUp</h1>
            </div>
          </a>
          <div className="hidden lg:flex justify-end flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-6 cursor-pointer group">
                <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                  Home
                </span>
              </a>
              <a href="#about" className="px-3 py-6  cursor-pointer group">
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
                  <a href="#lineden">
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
                    href="/"
                    className="block text-left px-3 py-1 pt-4 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Hotel
                    </span>
                  </a>
                  <a
                    href="/"
                    className="block text-left px-3 py-1 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Hot Spring Resort
                    </span>
                  </a>
                  <a
                    href="/"
                    className="block text-left px-3 py-1 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Hospital
                    </span>
                  </a>
                  <a
                    href="/"
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
                  <a href="#apparel">
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
                    href="/"
                    className="block text-left px-3 py-1 pt-4 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Apron
                    </span>
                  </a>
                  <a
                    href="/"
                    className="block text-left px-3 py-1 pb-4 text-mobileHeading4"
                  >
                    <span className="border-b-2 border-transparent hover:border-hoverColor">
                      Pajama
                    </span>
                  </a>
                </div>
              </div>
              <Link to="/contactMe" className="px-3 py-6  cursor-pointer group">
                <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                  Contact
                </span>
              </Link>
              <a href="/" className="px-3 py-6 cursor-pointer group">
                <span className="border-b-2 border-transparent group-hover:border-hoverColor">
                  日本语
                </span>
              </a>
            </div>
          </div>
          <div className="-mr-2 py-6 flex lg:hidden z-10">
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
        <div className="px-2 pt-4 pb-3 sm:px-3">
          <div className="flex justify-between items-center">
            <a href="/">
              <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="Logo" className="h-[auto] w-[50px] mr-2" />
                <h3 className="">Weifang SevenUp</h3>
              </div>
            </a>
            <button
              onClick={closeAllMenus}
              className="text-textcolor hover:text-white pr-2"
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

        <div className="flex-grow flex items-center justify-center">
          <div className="w-full">
            <a
              href="/"
              className="text-textcolor text-center block px-3 py-4"
              onClick={closeAllMenus}
            >
              <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                Home
              </h1>
            </a>
            <a
              href="/"
              className="text-textcolor text-center block px-3 py-4"
              onClick={closeAllMenus}
            >
              <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                About
              </h1>
            </a>
            <div>
              <button
                onClick={toggleLindenMenu}
                className="text-textcolor w-full text-center block px-3 py-4 flex justify-center items-center"
              >
                <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                  Linden Products
                </h1>
                <svg
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
              </button>
              {isLindenMenuOpen && (
                <div className="bg-mobileNavbarColor">
                  <a
                    href="/"
                    className="text-textcolor text-center block px-4 py-4"
                    onClick={closeAllMenus}
                  >
                    <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                      Hotel
                    </h1>
                  </a>
                  <a
                    href="/"
                    className="text-textcolor text-center block px-4 py-4"
                    onClick={closeAllMenus}
                  >
                    <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                      Hot Spring Resort
                    </h1>
                  </a>
                  <a
                    href="/"
                    className="text-textcolor text-center block px-4 py-4"
                    onClick={closeAllMenus}
                  >
                    <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                      Hospital
                    </h1>
                  </a>
                  <a
                    href="/"
                    className="text-textcolor text-center block px-4 py-4"
                    onClick={closeAllMenus}
                  >
                    <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                      Fabric
                    </h1>
                  </a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={toggleApparelMenu}
                className="text-textcolor w-full text-center block px-3 py-4 flex justify-center items-center"
              >
                <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                  Apparel Products
                </h1>
                <svg
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
              </button>
              {isApparelMenuOpen && (
                <div className="bg-mobileNavbarColor">
                  <a
                    href="/"
                    className="text-textcolor text-center block px-4 py-4"
                    onClick={closeAllMenus}
                  >
                    <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                      Apron
                    </h1>
                  </a>
                  <a
                    href="/"
                    className="text-textcolor text-center block px-4 py-4"
                    onClick={closeAllMenus}
                  >
                    <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                      Pajama
                    </h1>
                  </a>
                </div>
              )}
            </div>
            <a
              href="/"
              className="text-textcolor text-center block px-3 py-4"
              onClick={closeAllMenus}
            >
              <h1 className="border-b-2 border-transparent hover:border-hoverColor">
                Contact
              </h1>
            </a>
          </div>
        </div>

        <div className="px-2 pb-4">
          <a
            href="/"
            className="block text-left font-normal"
            onClick={closeAllMenus}
          >
            <span className="hover:border-hoverColor border-b-2 border-transparent">
              日本语
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
