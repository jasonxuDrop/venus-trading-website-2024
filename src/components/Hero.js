import React from "react";
import { useTranslation } from "react-i18next";
import homeImg from "../assets/images/homeImg/hero-image.jpg";
import logo from "../assets/images/logo/Logo Icon@4x 1.png";
import logoFullCenterEn from "../assets/images/logo/Logo Full EN Center.png";
import logoFullCenterJp from "../assets/images/logo/Logo Full JP Center.png";
import logoNoIconJp from "../assets/images/logo/Logo No Icon JP.svg";
import logoNoIconEn from "../assets/images/logo/Logo No Icon En.svg";

const Hero = () => {
  const { t, i18n } = useTranslation("page");

    return (
        <div
          className="max-w-screen-xl mx-auto pt
          mt-[-72px] px-0 pt-24
          sm:px-16 sm:pt-36 sm:pb-24
          lg:px-32"
        >
          <div className="flex flex-col gap-20
          sm:flex-row sm:justify-between
          ">
            {/* DESKTOP HERO */}
            <div
              className="hidden 
            sm:block max-w-[38%] flex-none"
            >
              <div className="flex flex-col justify-end h-full">
                <img
                  src={i18n.language === "en" ? logoNoIconEn : logoNoIconJp}
                  alt="Weifang SevenUp Trading Co., Ltd."
                  className="max-w-full"
                  style={{ marginBottom: "min(12vw, 9rem)" }}
                />
              </div>
            </div>

            {/* MOBILD HERO */}
            <div
              className="max-w-full pt-20
            sm:hidden"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={logo}
                  alt="Weifang SevenUp Trading Co., Ltd."
                  className="block w-28 h-auto"
                />
                {/* TODO: SWITCH TO JP LOGO IS IN JAPANESE */}
                <img
                  src={i18n.language === "en" ? logoFullCenterEn : logoFullCenterJp}
                  alt="Weifang SevenUp Trading Co., Ltd."
                  className="w-80 max-w-[80vw]"
                />
              </div>
            </div>


            <div className="w-full sm:w-1/2 flex-none">
              <img src={homeImg} alt="quality bedding product image" className="" />
            </div>

          </div>
        </div>
    )
}

export default Hero;