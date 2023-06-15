import React from "react";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

// navMenus
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const Navbar = () => {
  return (
    <div className="md:p-6 w-full sticky top-0 left-0 xs:p-4 xs:justify-between md:justify-evenly flex items-center  bg-whiteColor z-10">
      <div
        data-aos="fade-right"
        className="md:mr-[25rem] logo bg-gradient-to-r from-primaryBackground to-primaryButton"
      >
        <a
          href="#"
          className="font-rufina font-semibold text-gray-50 xs:text-xl md:text-[20px] xs:[16px]"
        >
          BioTech
        </a>
      </div>
      {/* MobileMenu */}
      <MobileMenu />
      {/* DesktopMenu */}
      <DesktopMenu />
    </div>
  );
};

export default Navbar;
