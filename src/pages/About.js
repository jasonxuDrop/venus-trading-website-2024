import React from 'react';
import aboutImg from "../assets/images/aboutImg/pexels-cottonbro-4108797.png";

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-12 my-[5rem]">
        <div className="relative grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-5 text-left border-2 my-auto">
              <h3 className="text-heading3">
                Import, Export Experts In Weifang, China
              </h3>
              <p className="text-mobilePText mt-2">
                Weifang SevenUp International Trading Co., Ltd. specializes in
                the import, export, and processing of textiles. Leveraging the
                abundant local textile resources, we maintain a comprehensive
                and rigorous quality management system.
              </p>
              <p className="text-mobilePText mt-2">
                We export a wide range of high-quality products to Japan, United
                States, Europe, and other regions throughout the year.
              </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 text-left border-2">
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-auto lg:h-[calc(100vh-10rem)] object-cover"
            />
          </div>
        </div>
      </div>
    )
}

export default About;