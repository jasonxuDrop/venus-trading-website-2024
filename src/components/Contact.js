import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3.5 sm:px-16 lg:px-32 lg:h-[calc(100vh-10rem)]">
      <div className="relative grid grid-cols-12 gap-2">
        <div className="col-span-12 lg:col-span-5 text-left border-2 flex flex-col justify-between lg:h-[70%]">
          <h2>Contact Us</h2>
          <p className="">
            Have questions about a particular product or interested in
            collaborating with us? Leave us a message, and we'll get back to you
            shortly.
          </p>
          <div className="my-2">
            <p className="text-left flex lg:grid lg:grid-cols-5 lg:gap-2">
              <span className="pr-2 lg:col-span-1">Phone</span>
              <span className="lg:col-span-1">912345678</span>
            </p>
            <p className="text-left flex lg:grid lg:grid-cols-5 lg:gap-2">
              <span className="pr-2 lg:col-span-1">Fax</span>
              <span className="lg:col-span-1">128736864901</span>
            </p>
            <p className="text-left flex lg:grid lg:grid-cols-5 lg:gap-2">
              <span className="pr-2 lg:col-span-1">Address</span>
              <span className="lg:col-span-3">12356878969612 123987</span>
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 text-left border-2">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-formColor">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="input-field"
                
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-formColor">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="input-field"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="font-semibold text-formColor">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                required
                className="input-field"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold text-formColor">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows="4"
                className="input-field"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-buttonColor text-black rounded hover:bg-buttonHover"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
