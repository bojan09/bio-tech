import React from "react";

const Footer = () => {
  return (
    <div>
      <ul className="flex justify-center items-center md:gap-14 bg-whiteColor py-10 mt-[4rem] flex-wrap">
        <li className="mb-2">
          <a
            className="text-[16px] md:text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-[16px] md:text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#features"
          >
            Features
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-[16px] md:text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-[16px] md:text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#about"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
