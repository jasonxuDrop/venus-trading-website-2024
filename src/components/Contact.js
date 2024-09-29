import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useScreenHeight from "../utils/hooks/useScreenHeight";
import { useQuote } from "../context/QuoteContext";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

import pageImage from "../assets/content/pageImg.json";

const Contact = () => {
  const smallScreenHeight = useScreenHeight(600);

  const { t } = useTranslation("page");

  const { quoteDetails, updateQuoteDetails } = useQuote(); // for the quote message context.
  const [quoteTextArea, setQuoteTextArea] = useState(""); // for the quote message local.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  // Update local state when quoteDetails change
  useEffect(() => {
    setQuoteTextArea(quoteDetails);
  }, [quoteDetails]);

  // Check for a flag to clear quoteDetails on component mount
  useEffect(() => {
    if (localStorage.getItem("clearQuoteOnReload") === "true") {
      updateQuoteDetails("");
      localStorage.removeItem("clearQuoteOnReload");
      setFormData({ name: "", email: "", company: "" });
      setQuoteTextArea("");
    }
  }, [updateQuoteDetails]);

  // Handle the beforeunload event
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (
        quoteDetails ||
        quoteTextArea ||
        formData.name ||
        formData.email ||
        formData.company
      ) {
        localStorage.setItem("clearQuoteOnReload", "true");
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [quoteDetails, formData, quoteTextArea]); // Depend on quoteDetails directly

  const handleInputChange = (event) => {
    setQuoteTextArea(event.target.value);
  };

  const handleContactInput = (event) => {
    const { name, value } = event.target;
    console.log("123");
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const MY_SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID;
    const MY_TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID;
    const MY_PUBLIC_KEY = process.env.REACT_APP_MY_PUBLIC_KEY;

    const EMAIL_TEMPLATE = {
      from_name: formData.name,
      from_email: formData.email,
      from_company: formData.company,
      message: quoteTextArea,
      to_name: "Venus Trading",
    };

    emailjs
      .send(MY_SERVICE_ID, MY_TEMPLATE_ID, EMAIL_TEMPLATE, MY_PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email successfully sent!", result);
          setFormData({ name: "", email: "", company: "" });
          setQuoteTextArea("");
          alert("Message sent successfully!");
          updateQuoteDetails("");
        },
        (error) => {
          console.log("Failed to send the email: ", error.text);
          alert("Failed to send the message.");
        }
      );
  };

  return (
    <div
      className={`max-w-screen-xl lg:min-h-[537px] mx-auto px-6 sm:px-16 lg:px-32 ${
        smallScreenHeight ? "" : ""
      }`}
    >
      <Reveal>
        <div className="relative grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-5 text-left flex flex-col">
            <h2 className="mb-[64px]">
              {t(`contact.${pageImage.contact.context.title}`)}
            </h2>
            <p className="mb-[16px]">
              {t(`contact.${pageImage.contact.context.content}`)}
            </p>
            <div className="my-2 mb-[128px]">
              <p className="text-left flex gap-2">
                <span className="w-24 flex-none">
                  {t(`contact.${pageImage.contact.context.phone}`)}
                </span>
                <span className="">
                  {t(`contact.${pageImage.contact.context.phoneVal}`)}
                </span>
              </p>
              <p className="text-left flex gap-2">
                <span className="w-24 flex-none">
                  {t(`contact.${pageImage.contact.context.fax}`)}
                </span>
                <span className="">
                  {t(`contact.${pageImage.contact.context.faxVal}`)}
                </span>
              </p>
              <p className="text-left flex gap-2">
                <span className="w-24 flex-none">
                  {t(`contact.${pageImage.contact.context.address}`)}
                </span>
                <span className="">
                  {t(`contact.${pageImage.contact.context.addressVal}`)}
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 text-left">
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="name" className="font-semibold text-formColor">
                  {t(`contact.form.${pageImage.contact.form.name}`)}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  name="name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleContactInput}
                />
              </div>
              <div className="flex flex-col mb-[16px]">
                <label htmlFor="email" className="font-semibold text-formColor">
                  {t(`contact.form.${pageImage.contact.form.email}`)}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  name="email"
                  className="input-field"
                  onChange={handleContactInput}
                  value={formData.email}
                />
              </div>
              <div className="flex flex-col mb-[16px]">
                <label
                  htmlFor="company"
                  className="font-semibold text-formColor"
                >
                  {t(`contact.form.${pageImage.contact.form.company}`)}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="input-field"
                  onChange={handleContactInput}
                  value={formData.company}
                />
              </div>
              <div className="flex flex-col mb-[32px]">
                <label
                  htmlFor="message"
                  className="font-semibold text-formColor"
                >
                  {t(`contact.form.${pageImage.contact.form.message}`)}
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="resize-y input-field"
                  value={quoteTextArea}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="text-center lg:flex lg:justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 transition-colors duration-150 bg-buttonColor text-black rounded hover:bg-buttonHover"
                >
                  {t(`contact.form.${pageImage.contact.form.send}`)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
