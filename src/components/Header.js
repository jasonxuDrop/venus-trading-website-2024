/**
 *  This is a nav bar componnent, both PC and Mobile view.
 */

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import productMenu from "../assets/productMenu.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsHovering, setIsProductsHovering] = useState(false);
  const [isLanguageHovering, setIsLanguageHovering] = useState(false);

  return (
    <header className="bg-black">
      {/* pc view nav bar */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 p-3"
        aria-label="Global"
      >
        {/* company logo */}
        <div className="flex lg:flex-1">
          <a href="/#" className="-m-1.5 p-1.5">
            <span className="sr-only">Venus Trading</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>

        {/* mobile view menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className=" leading-6 text-white pt-3 pb-3">
            Home
          </Link>
          <Link to="/about" className="leading-6 text-white pt-3 pb-3">
            About
          </Link>

          {/* product selection */}
          <Popover className="relative ">
            {({ open }) => (
              <>
                <Popover.Button
                  className="flex items-center gap-x-1 leading-6 text-white pt-3 pb-3"
                  onMouseEnter={() => setIsProductsHovering(true)}
                  onMouseLeave={() => setIsProductsHovering(false)}
                >
                  Product
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  show={open || isProductsHovering}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    className="absolute -right-8 top-full z-10 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5"
                    onMouseEnter={() => setIsProductsHovering(true)}
                    onMouseLeave={() => setIsProductsHovering(false)}
                  >
                    <div className="flex">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        {productMenu.map((item) => (
                          <Link
                            to={`/product/${item.href}`}
                            className="block text-gray-900"
                            onClick={() => {
                              setIsProductsHovering(false);
                            }}
                          >
                            <div
                              key={item.name}
                              className="group relative flex items-start gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50 cursor-pointer"
                            >
                              <item.icon
                                className="h-6 w-6 flex-none text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <div className="flex-auto">
                                <p className="font-semibold">{item.name}</p>

                                <p className="mt-1 text-sm text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link to="/contact" className="leading-6 text-white pt-3 pb-3">
            Contact
          </Link>

          {/* lanague selection */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className="flex items-center gap-x-1 leading-6 text-white pt-3 pb-3"
                  onMouseEnter={() => setIsLanguageHovering(true)}
                  onMouseLeave={() => setIsLanguageHovering(false)}
                >
                  EN
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  show={open || isLanguageHovering} // Show the panel when popover is open or button is hovered
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    className="absolute -left-8 top-full z-10 max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    onMouseEnter={() => setIsLanguageHovering(true)}
                    onMouseLeave={() => setIsLanguageHovering(false)}
                  >
                    <div className="flex">
                      <div className="p-4 cursor-pointer">
                        {/* Popover content */}
                        <div
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50 text-gray-900"
                          onClick={() => setIsLanguageHovering(false)}
                        >
                          JP
                        </div>
                        <div
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50 text-gray-900"
                          onClick={() => setIsLanguageHovering(false)}
                        >
                          CN
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
      </nav>

      {/* mobile view nav bar */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Venus Trading</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-white hover:bg-gray-50 hover:text-black">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...productMenu].map((item) => (
                          <Link
                            to={`/product/${item.href}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                          >
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              className="block rounded-lg py-2 pl-6 pr-3 leading-7 text-white hover:bg-gray-50 hover:text-black"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <Disclosure as="div" className={"-mx-3"}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-white hover:bg-gray-50 hover:text-black">
                        EN
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          as="a"
                          className="block rounded-lg py-2 pl-6 pr-3 leading-7 text-white hover:bg-gray-50 hover:text-black"
                        >
                          JP
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          className="block rounded-lg py-2 pl-6 pr-3 leading-7 text-white hover:bg-gray-50 hover:text-black"
                        >
                          CN
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
