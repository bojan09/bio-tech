import React from "react";

const DesktopMenu = () => {
  return (
    <div className="xs:hidden md:flex">
      <ul className="xs:hidden md:flex">
        <li className="mb-2">
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#features"
          >
            Features
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
