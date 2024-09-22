import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo/Logo Full En-white.svg";

import footerLink from "../assets/content/footerLink.json";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-footerBgColor text-textWhite">
      <div className="max-w-7xl mx-auto py-12 px-3.5 sm:px-16 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="sm:col-span-1 lg:col-span-4">
            <div className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-[auto] w-[420px]"
              />
            </div>
            <div className="mt-4">
              {footerLink.navigation["col-1"].map((link) => {
                return (
                  <p className="text-left">
                    {t(`footer.${link.id}`)}:{" "}
                    <span>{t(`footer.${link.id2}`)}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1 text-left lg:text-right">
            <ul className="text-mobileHeading4">
              {footerLink.navigation["col-3"].map((link, index) => {
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
              })}
            </ul>
          </div>
          <div className="sm:col-span-1 lg:col-span-1 text-left lg:text-right">
            <ul className="text-mobileHeading4">
              {footerLink.navigation["col-2"].map((link, index) => {
                if (index === 0) {
                  return (
                    <li>
                      <a href={link.url}>{t(`footer.${link.id}`)}</a>
                    </li>
                  );
                } else if (
                  link.id === "linden" ||
                  link.id === "apparel"
                ) {
                  return (
                    <li className="mt-4 block lg:hidden">
                      <a href={link.url}>{t(`footer.${link.id}`)}</a>
                    </li>
                  );
                } else {
                  return (
                    <li className="mt-4">
                      <button
                        href={link.url}
                        onClick={() =>
                          changeLanguage(i18n.language === "en" ? "jp" : "en")
                        }
                      >
                        {t(`footer.${link.id}`)}
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-8 pb-8">
        <p className="text-sm text-left px-3.5 sm:px-16 lg:px-8 lg:text-center">
          {t(`footer.${footerLink.copyRight.id}`)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
