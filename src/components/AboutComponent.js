import React from "react";
import { useTranslation } from "react-i18next";
import aboutImg from "../assets/images/aboutImg/pexels-cottonbro-4108797.png";
import useScreenHeight from "../utils/hooks/useScreenHeight";

import pageImg from "../assets/content/pageImg.json";

const AboutComponent = () => {
  const { t, i18n } = useTranslation("page");

  const smallScreenHeight = useScreenHeight(600);

  return (
    <div className="max-w-screen-xl mx-auto h-[auto] px-6 sm:px-16 lg:px-32">
      <div className="relative grid grid-cols-12 gap-2">
        <div className="col-span-12 lg:col-span-6 text-left">
          <img
            // src={t(`about.${pageImg.about.aboutImg.id}`)}
            src={aboutImg}
            alt="About"
            className={`w-full ${
              smallScreenHeight ? "" : ""
            } hidden lg:block object-cover`}
          />
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 text-left my-auto">
          <h2>{t(`about.${pageImg.about.title.id}`)}</h2>
          {
            pageImg.about.paragraph.map((p)=> {
              return (
                <p className="mt-4">{
                  t(`about.${p.id}`)
                }</p>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
