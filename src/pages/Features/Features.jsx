import React from "react";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

const Features = () => {
  return (
    <div
      id="features"
      className="my-[5rem] flex flex-col justify-center items-center gap-10"
    >
      <h1
        className="text-center md:text-5xl xs:text-3xl my-6 font-rufina text-textColor"
        data-aos="fade-down"
      >
        Reliable aids you recive from us
      </h1>

      <div
        className="grid md:flex flex-wrap justify-center xs:gap-10 md:gap-2 md:w-[40%]"
        data-aos="fade-up"
      >
        <div className="polygon bg-primaryBackground w-[13rem] h-[14rem] flex items-center bg-gradient-to-tr from-primaryBackground to-primaryButton">
          <p className="text-whiteColor font-oxygen text-lg p-2 text-center cursor-pointer">
            Freshwater and sediment sampling and analysis
          </p>
        </div>

        <div className="polygon bg-primaryBackground w-[13rem] h-[14rem] flex items-center bg-gradient-to-tr from-primaryBackground to-primaryButton">
          <p className="text-whiteColor font-oxygen text-lg p-2 text-center cursor-pointer">
            eDNA sampling and analysis
          </p>
        </div>

        <div className="polygon bg-primaryBackground w-[13rem] h-[14rem] flex items-center bg-gradient-to-tr from-primaryBackground to-primaryButton">
          <p className="text-whiteColor font-oxygen text-lg p-2 text-center cursor-pointer">
            Traditional knowledge interviews and collation
          </p>
        </div>

        <div className="md:mt-[-4rem] polygon bg-primaryBackground w-[13rem] h-[14rem] flex items-center bg-gradient-to-tr from-primaryBackground to-primaryButton">
          <p className="text-whiteColor font-oxygen text-lg p-2 px-[1.55rem] text-center cursor-pointer">
            Document reviewer
          </p>
        </div>

        <div className="md:mt-[-4rem] polygon bg-primaryBackground w-[13rem] h-[14rem] flex items-center bg-gradient-to-tr from-primaryBackground to-primaryButton">
          <p className="text-whiteColor font-oxygen text-lg p-2 text-center cursor-pointer">
            Community outreach and Consultation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
