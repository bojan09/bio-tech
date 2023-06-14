import React from "react";

const Navbar = () => {
  return (
    <div className="p-6 justify-evenly flex items-center sticky bg-whiteColor">
      <div className="mr-[7rem] logo bg-gradient-to-r from-primaryBackground to-primaryButton">
        <a
          href="#"
          className="font-rufina font-semibold text-gray-50 text-[20px]"
        >
          BioTech
        </a>
      </div>

      <ul className="flex gap-4">
        <li>
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#features"
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-[20px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
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

export default Navbar;
