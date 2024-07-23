import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo/Logo Full En-white.svg";

import footerLink from "../assets/content/footerLink.json";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");

  return (
    <footer className="bg-footerBgColor">
      <div className="max-w-7xl mx-auto py-12 px-3.5 sm:px-16 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="sm:col-span-1 lg:col-span-2">
            <div className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-[auto] w-[300px] lg:w-full mr-2"
              />
              <div className="text-left text-textWhite"></div>
            </div>
            <div className="mt-4">
              {footerLink.navigation["desktop-links"]["col-1"].map((link) => {
                return (
                  <p className="text-left text-textWhite">
                    {t(`footer.${link.id}`)}:{" "}
                    <span>{t(`footer.${link.id2}`)}</span>
                  </p>
                );
              })}
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
              {/* <li>
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
              </li> */}
              {footerLink.navigation["desktop-links"]["col-2"].map(
                (link, index) => {
                  if (index === 0) {
                    return (
                      <li>
                        <a href={link.url}>{t(`footer.${link.id}`)}</a>
                      </li>
                    );
                  } else if (
                    link.id === "linden" ||
                    link.id === "apparel" ||
                    link.id === "contact"
                  ) {
                    return (
                      <li className="mt-4 block lg:hidden">
                        <a href={link.url}>{t(`footer.${link.id}`)}</a>
                      </li>
                    );
                  } else {
                    return (
                      <li className="mt-4">
                        <a href={link.url}>{t(`footer.${link.id}`)}</a>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          </div>
          <div className="hidden lg:block lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="text-mobileHeading4">
              {footerLink.navigation["desktop-links"]["col-3"].map(
                (link, index) => {
                  if (index === 0) {
                    return (
                      <li>
                        <a href={link.url}>{t(`footer.${link.id}`)}</a>
                      </li>
                    );
                  } else {
                    return (
                      <li className="mt-4">
                        <a href={link.url}>{t(`footer.${link.id}`)}</a>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          </div>
          <div className="hidden lg:block lg:col-span-1 text-textWhite text-left lg:text-right">
            <ul className="text-mobileHeading4">
              {footerLink.navigation["desktop-links"]["col-4"].map(
                (link, index) => {
                  if (index === 0) {
                    return (
                      <li>
                        <a href={link.url}>{t(`footer.${link.id}`)}</a>
                      </li>
                    );
                  } else {
                    return (
                      <li className="mt-4">
                        <a href={link.url}>{t(`footer.${link.id}`)}</a>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-footerBgColor mt-4 pt-8 pb-8">
        <p className="text-sm text-textWhite text-left px-3.5 sm:px-16 lg:px-8 lg:text-center">
          {t(`footer.${footerLink.copyRight.id}`)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
