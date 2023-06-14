import React from "react";

// navMenus
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const Navbar = () => {
  return (
    <div className="md:p-6 w-full sticky top-0 left-0 xs:p-4 xs:justify-between md:justify-evenly flex items-center  bg-whiteColor">
      <div className="md:mr-[7rem] logo bg-gradient-to-r from-primaryBackground to-primaryButton">
        <a
          href="#"
          className="font-rufina font-semibold text-gray-50 md:text-[20px] xs:[16px]"
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
