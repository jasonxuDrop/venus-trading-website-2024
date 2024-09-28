import React from "react";
import { useTranslation } from "react-i18next";
import homtImg from "../assets/images/homeImg/hero-image.jpg";
import logo from "../assets/images/logo/Logo Icon@4x 1.png";
import logoFullCenterEn from "../assets/images/logo/Logo Full EN Center.png";
import logoNoIconJp from "../assets/images/logo/Logo No Icon JP.svg";
import logoNoIconEn from "../assets/images/logo/Logo No Icon En.svg";

const Hero = () => {
  const { t, i18n } = useTranslation("page");

    return (
        <div
          className="max-w-screen-xl mx-auto
        px-3.5
        sm:px-16 
        lg:px-32"
        >
          <div className="relative grid grid-cols-12 gap-2">
            {/* DESKTOP HERO */}
            <div
              className="hidden col-span-5 
            sm:block"
            >
              <div className="flex flex-col justify-end h-full">
                <img
                  src={i18n.language === "en" ? logoNoIconEn : logoNoIconJp}
                  alt="company logo"
                  className="max-w-full"
                  style={{ marginBottom: "min(12vw, 9rem)" }}
                />
              </div>
            </div>
            <div
              className="hidden col-span-6 col-start-7 object-cover object-bottom
            sm:block"
            >
              <img src={homtImg} alt="" className="" />
            </div>

            {/* MOBILD HERO */}
            <div
              className="col-span-12 max-w-full h-[calc(1.672*100vw)]
            sm:hidden"
            >
              <div className="flex flex-col items-center justify-center text-center py-16">
                <img
                  src={logo}
                  alt="company logo"
                  className="block w-28 h-auto"
                />
                {/* TODO: SWITCH TO JP LOGO IS IN JAPANESE */}
                <img
                  src={logoFullCenterEn}
                  alt="company logo"
                  className="w-80 max-w-[80vw]"
                />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Hero;