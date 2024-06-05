/**
 *  This is a nav bar componnent, both PC and Mobile view.
 */

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(prev => !prev);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsServiceMenuOpen(false);
  };

  return (
    <nav className="bg-navbarcolor text-textcolor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold">Brand</h1>
          </div>
          <div className="hidden md:flex justify-end flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="group relative">
                <button className="px-3 py-2 text-sm font-medium flex items-center border-b-2 border-transparent group-hover:border-hover" onMouseEnter={() => setIsServiceMenuOpen(true)} onMouseLeave={() => setIsServiceMenuOpen(false)}>
                  <span>Services</span>
                  <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${isServiceMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="#1C1F29" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                  </svg>
                </button>
                <div className={`absolute bg-navbarcolor ${isServiceMenuOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setIsServiceMenuOpen(true)} onMouseLeave={() => setIsServiceMenuOpen(false)}>
                  <a href="/" className="block px-4 py-2 text-sm border-b-2 border-transparent hover:border-hover"><span>Service 1</span></a>
                  <a href="/" className="block px-4 py-2 text-sm border-b-2 border-transparent hover:border-hover"><span>Service 2</span></a>
                </div>
              </div>
              <a href="/" className="px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-hover"><span>About</span></a>
              <a href="/" className="px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-hover"><span>Contact</span></a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-color inline-flex items-center justify-center p-2 text-textcolor hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navbar">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#1C1F29" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transform top-0 left-0 w-full h-full bg-navbarcolor fixed z-50 ease-in-out duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold pl-2">Brand</h1>
            <button onClick={closeAllMenus} className="text-textcolor hover:text-white pr-2">
              <svg className="h-8 w-8" fill="none" stroke="#1C1F29" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <a href="/" className="text-textcolor block px-3 py-2 text-base font-medium border-b-2 border-transparent hover:border-hover" onClick={closeAllMenus}><span>Home</span></a>
          <div>
            <button onClick={toggleServiceMenu} className="text-textcolor w-full text-center block px-3 py-2 text-base font-bold flex justify-center items-center border-b-2 border-transparent hover:border-hover">
              <span>Services</span>
              <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${isServiceMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="#1C1F29" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
            {isServiceMenuOpen && (
              <div className="bg-navbarcolor">
                <a href="/" className="text-textcolor block px-4 py-2 text-sm border-b-2 border-transparent hover:border-hover" onClick={closeAllMenus}><span>Service 1</span></a>
                <a href="/" className="text-textcolor block px-4 py-2 text-sm border-b-2 border-transparent hover:border-hover" onClick={closeAllMenus}><span>Service 2</span></a>
              </div>
            )}
          </div>
          <a href="/" className="text-textcolor block px-3 py-2 text-base font-medium border-b-2 border-transparent hover:border-hover" onClick={closeAllMenus}><span>About</span></a>
          <a href="/" className="text-textcolor block px-3 py-2 text-base font-medium border-b-2 border-transparent hover:border-hover" onClick={closeAllMenus}><span>Contact</span></a>
        </div>
      </div>
    </nav>
  );
};

export default Header;




