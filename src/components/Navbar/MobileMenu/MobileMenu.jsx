import React, { useState } from "react";

// assets
import { menu, close } from "../../../assets";

const MobileMenu = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden  flex">
      <img
        src={!toggle ? menu : close}
        className="w-[40px] h-[40xp] object-contain cursor-pointer grid justify-center items-center mr-[1rem]"
        alt="nav menu"
        onClick={() => setToggle(!toggle)}
      />

      <div className={`${!toggle ? "hidden" : "grid"}  `}>
        <ul className="md:hidden grid  justify-end items-center px-8 py-2 ">
          <li className="mb-2">
            <a
              className="text-[16px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
              href="#home"
              onClick={() => setToggle(!toggle)}
            >
              Home
            </a>
          </li>
          <li className="mb-2">
            <a
              className="text-[16px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
              href="#features"
              onClick={() => setToggle(!toggle)}
            >
              Features
            </a>
          </li>
          <li className="mb-2">
            <a
              className="text-[16px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
              href="#projects"
              onClick={() => setToggle(!toggle)}
            >
              Projects
            </a>
          </li>
          <li className="mb-2">
            <a
              className="text-[16px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
              href="#about"
              onClick={() => setToggle(!toggle)}
            >
              About
            </a>
          </li>
          <li className="mb-2">
            <a
              className="text-[16px] font-oxygen uppercase font-medium focus:bg-gradient-to-r from-primaryBackground to-primaryButton focus-within:text-white p-2"
              href="#contact"
              onClick={() => setToggle(!toggle)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
