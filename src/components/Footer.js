import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-1 lg:col-span-1">
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt="Company logo"
            />
            <p className="mt-4 text-gray-500 text-left">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
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
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase text-left">
              About Us
            </h3>
            <p className="mt-4 text-base text-gray-500 text-left">
              Venus Trading is manufacturing & exporting complete range of fabrics,
              home textiles, terry towels, hospital bed sheets, medical
              garments, hotel linen in 100% cotton, poly cotton and cvc from
              Faisalabad — the textile nerve center of Pakistan. We do our best
              to offer you reasonable prices along with good quality for the
              textile products that you need to import from Pakistan.
            </p>
          </div>
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase text-left">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4 text-left">
              {/* Navigation links */}
              <li>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/product/1"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase text-left">
              Contact Us
            </h3>
            <div className="mt-4 space-y-4 text-base text-gray-500 text-left">
              {/* Contact info */}
              <p>
                Please feel free to contact us for your business inquiries. Our
                office timings are 9am-6pm PST (Pakistan Standard Time), Monday
                to Saturday.
              </p>
              <p>
                Tel: +92 41 2426068
                <br />
                +92 41 2526069-70
              </p>
              <p>Fax: +92 41 2526071</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:export@jjfabrics.com"
                  className="hover:text-gray-900"
                >
                  export@jjfabrics.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black mt-12 border-t border-gray-200 pt-8 pb-8">
          <p className="text-base text-white text-center">
            © 2024 Venus Trading. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
