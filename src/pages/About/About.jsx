import React from "react";

// assets
import { about } from "../../assets";

const About = () => {
  return (
    <div id="about" className="my-[4rem]">
      <h1 className="text-center md:text-5xl xs:text-3xl my-6 font-rufina text-textColor mb-10">
        Who we are
      </h1>

      {/* Container */}
      <div className="md:flex justify-evenly">
        {/* Left - Container */}
        <div className="">
          <img src={about} alt="about_img" />
        </div>
        {/* Right - Container */}
        <div className="md:w-[45%] bg-whiteColor md:px-4  py-6">
          <h1 className="text-center md:text-5xl xs:text-3xl my-7 font-rufina  text-textColor">
            We build with community in mind
          </h1>
          <p className="px-4 py-6 text-center text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate
            velit esse cillum dolore at nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, qui officia deseruanim id est laborum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in voluptate velit esse cillum
            dolore eu fugiat nulla. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa ollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
