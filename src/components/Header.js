/**
 *  This is a nav bar componnent, both PC and Mobile view.
 */

import React, { useState, useCallback } from "react";
import logo from "../assets/images/logo/Logo Icon@4x 1.png";

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

  return (
    <nav className="bg-navbarcolor text-textcolor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <h1 className="text-lg font-bold">Weifang SevenUp</h1>
          </div>
          <div className="hidden md:flex justify-end flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 text-sm font-medium">
                <span className="border-b-2 border-transparent hover:border-hover">
                  Home
                </span>
              </a>
              <a href="/" className="px-3 py-2 text-sm font-medium">
                <span className="border-b-2 border-transparent hover:border-hover">
                  About
                </span>
              </a>
              <div className="group relative">
                <button
                  className="px-3 py-2 text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsLindenMenuOpen(true)}
                  onMouseLeave={() => setIsLindenMenuOpen(false)}
                  aria-expanded={isLindenMenuOpen}
                >
                  <span className="border-b-2 border-transparent group-hover:border-hover">
                    Linden Products
                  </span>
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
                  className={`absolute bg-navbarcolor w-full  ${
                    isLindenMenuOpen ? "block" : "hidden"
                  }`}
                  onMouseEnter={() => setIsLindenMenuOpen(true)}
                  onMouseLeave={() => setIsLindenMenuOpen(false)}
                  style={{}}
                >
                  <a href="/" className="block px-3 py-3 text-sm">
                    <span className="border-b-2 border-transparent hover:border-hover">
                      Product 1
                    </span>
                  </a>
                  <a href="/" className="block px-3 py-3 text-sm">
                    <span className="border-b-2 border-transparent hover:border-hover">
                      Product 2
                    </span>
                  </a>
                </div>
              </div>
              <div className="group relative">
                <button
                  className="px-3 py-2 text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsApparelMenuOpen(true)}
                  onMouseLeave={() => setIsApparelMenuOpen(false)}
                  aria-expanded={isApparelMenuOpen}
                >
                  <span className="border-b-2 border-transparent group-hover:border-hover">
                    Apparel Products
                  </span>
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
                  className={`absolute bg-navbarcolor w-full ${
                    isApparelMenuOpen ? "block" : "hidden"
                  }`}
                  onMouseEnter={() => setIsApparelMenuOpen(true)}
                  onMouseLeave={() => setIsApparelMenuOpen(false)}
                >
                  <a href="/" className="block px-3 py-3 text-sm">
                    <span className="border-b-2 border-transparent hover:border-hover">
                      Product 1
                    </span>
                  </a>
                  <a href="/" className="block px-3 py-3 text-sm">
                    <span className="border-b-2 border-transparent hover:border-hover">
                      Product 2
                    </span>
                  </a>
                </div>
              </div>
              <a href="/" className="px-3 py-2 text-sm font-medium">
                <span className="border-b-2 border-transparent hover:border-hover">
                  Contact
                </span>
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-navbarcolor inline-flex items-center justify-center p-2 text-textcolor hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navbar "
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

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform top-0 left-0 w-full h-full bg-navbarcolor fixed z-50 ease-in-out duration-300 flex flex-col`} // Removed justify-center from here
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              <h1 className="text-lg font-bold">Weifang SevenUp</h1>
            </div>
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Centered container for the rest of the menu items */}
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full">
            <a
              href="/"
              className="text-textcolor block px-3 py-4 text-4xl font-medium border-b-2 border-transparent hover:border-hover"
              onClick={closeAllMenus}
            >
              <span>Home</span>
            </a>
            <a
              href="/"
              className="text-textcolor block px-3 py-4 text-4xl font-medium border-b-2 border-transparent hover:border-hover"
              onClick={closeAllMenus}
            >
              <span>About</span>
            </a>
            <div>
              <button
                onClick={toggleLindenMenu}
                className="text-textcolor w-full text-center block px-3 py-4 text-4xl font-bold flex justify-center items-center border-b-2 border-transparent hover:border-hover"
              >
                <span>Linden Products</span>
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
                <div className="bg-navbarcolor">
                  <a
                    href="/"
                    className="text-textcolor block px-4 py-4 text-4xl border-b-2 border-transparent hover:border-hover"
                    onClick={closeAllMenus}
                  >
                    <span>Product 1</span>
                  </a>
                  <a
                    href="/"
                    className="text-textcolor block px-4 py-4 text-4xl border-b-2 border-transparent hover:border-hover"
                    onClick={closeAllMenus}
                  >
                    <span>Service 2</span>
                  </a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={toggleApparelMenu}
                className="text-textcolor w-full text-center block px-3 py-4 text-4xl font-bold flex justify-center items-center border-b-2 border-transparent hover:border-hover"
              >
                <span>Apparel Products</span>
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
                <div className="bg-navbarcolor">
                  <a
                    href="/"
                    className="text-textcolor block px-4 py-4 text-4xl border-b-2 border-transparent hover:border-hover"
                    onClick={closeAllMenus}
                  >
                    <span>Product 1</span>
                  </a>
                  <a
                    href="/"
                    className="text-textcolor block px-4 py-4 text-4xl border-b-2 border-transparent hover:border-hover"
                    onClick={closeAllMenus}
                  >
                    <span>Product 2</span>
                  </a>
                </div>
              )}
            </div>
            <a
              href="/"
              className="text-textcolor block px-3 py-4 text-4xl font-medium border-b-2 border-transparent hover:border-hover"
              onClick={closeAllMenus}
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
