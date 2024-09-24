import React from "react";
import { useTranslation } from "react-i18next";
import useScreenHeight from "../utils/hooks/useScreenHeight";

import pageImage from "../assets/content/pageImg.json";

const Contact = () => {
  const smallScreenHeight = useScreenHeight(600);

  const { t } = useTranslation("page");

  return (
    <div
      className={`max-w-screen-xl lg:h-[537px] mx-auto px-6 sm:px-16 lg:px-32 ${
        smallScreenHeight ? "" : ""
      }`}
    >
      <div className="relative grid grid-cols-12 gap-2">
        <div className="col-span-12 lg:col-span-5 text-left flex flex-col justify-between lg:h-[70%]">
          <h2 className="mb-[64px]">
            {t(`contact.${pageImage.contact.context.title}`)}
          </h2>
          <p className="mb-[16px]">
            {t(`contact.${pageImage.contact.context.content}`)}
          </p>
          <div className="my-2 mb-[128px]">
            <p className="text-left flex lg:grid lg:grid-cols-5 lg:gap-2">
              <span className="pr-2 lg:col-span-1">
                {t(`contact.${pageImage.contact.context.phone}`)}
              </span>
              <span className="lg:col-span-1">
                {t(`contact.${pageImage.contact.context.phoneVal}`)}
              </span>
            </p>
            <p className="text-left flex lg:grid lg:grid-cols-5 lg:gap-2">
              <span className="pr-2 lg:col-span-1">
                {t(`contact.${pageImage.contact.context.fax}`)}
              </span>
              <span className="lg:col-span-1">
                {t(`contact.${pageImage.contact.context.faxVal}`)}
              </span>
            </p>
            <p className="text-left flex lg:grid lg:grid-cols-5 lg:gap-2">
              <span className="pr-2 lg:col-span-1">
                {t(`contact.${pageImage.contact.context.address}`)}
              </span>
              <span className="lg:col-span-3">
                {t(`contact.${pageImage.contact.context.addressVal}`)}
              </span>
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 text-left">
          <form className="space-y-4">
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="name" className="font-semibold text-formColor">
                {t(`contact.form.${pageImage.contact.form.name}`)}
              </label>
              <input type="text" id="name" required className="input-field" />
            </div>
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="email" className="font-semibold text-formColor">
                {t(`contact.form.${pageImage.contact.form.email}`)}
              </label>
              <input type="email" id="email" required className="input-field" />
            </div>
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="company" className="font-semibold text-formColor">
                {t(`contact.form.${pageImage.contact.form.company}`)}
              </label>
              <input
                type="text"
                id="company"
                required
                className="input-field"
              />
            </div>
            <div className="flex flex-col mb-[32px]">
              <label htmlFor="message" className="font-semibold text-formColor">
                {t(`contact.form.${pageImage.contact.form.message}`)}
              </label>
              <textarea
                id="message"
                required
                rows="4"
                className="input-field resize-none"
              ></textarea>
            </div>
            <div className="text-center lg:flex lg:justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-buttonColor text-black rounded hover:bg-buttonHover"
              >
                {t(`contact.form.${pageImage.contact.form.send}`)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
