import React from "react";

// assets
import { home } from "../../assets";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

const Home = () => {
  return (
    <div id="home" className="w-full md:flex justify-center items-center">
      {/* Left container */}
      <div className="p-5 md:w-[40%]">
        <h1
          data-aos="fade-down"
          className="md:text-5xl xs:text-3xl my-6 font-rufina text-textColor"
        >
          Sustainable solutions
        </h1>
        <p
          data-aos="fade-down"
          className="md:text-xl xs:text-lg font-oxygen mb-[3rem] text-textColor "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse re
          veniam delectus aperiam repellendus dolor sit amet, consectetur totam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
          fugiat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At, et!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquam
          sed. Soluta modi inventore iste, culpa ullam quis libero repellat
          fugit doloribus natus at incidunt?
        </p>
        <div data-aos="fade-up">
          <a
            className="bg-primaryButton text-whiteColor font-semibold px-5 py-3 font-oxygen rounded hover:bg-primaryBackground"
            href="#contact"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* Right container */}
      <div data-aos="fade-left">
        <img src={home} alt="home_img" className="w-full" />
      </div>
    </div>
  );
};

export default Home;
