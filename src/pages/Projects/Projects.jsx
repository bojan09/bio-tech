import React from "react";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
} from "../../assets";

const Projects = () => {
  const ourProjects = [
    {
      id: 1,
      image: gallery_1,
      title: "Cherish",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum illum vitae fuga nulla maiores suscipit rerum, autem tenetur sed a laboriosam nostrum fugiat quam laborum? Repellat officia pariatur illo!",
    },
    {
      id: 2,
      image: gallery_2,
      title: "Rebuild",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum illum vitae fuga nulla maiores suscipit rerum, autem tenetur sed a laboriosam nostrum fugiat quam laborum? Repellat officia pariatur illo!",
    },
    {
      id: 3,
      image: gallery_3,
      title: "Observe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum illum vitae fuga nulla maiores suscipit rerum, autem tenetur sed a laboriosam nostrum fugiat quam laborum? Repellat officia pariatur illo!",
    },
    {
      id: 4,
      image: gallery_4,
      title: "Grow",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum illum vitae fuga nulla maiores suscipit rerum, autem tenetur sed a laboriosam nostrum fugiat quam laborum? Repellat officia pariatur illo!",
    },
    {
      id: 5,
      image: gallery_5,
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum illum vitae fuga nulla maiores suscipit rerum, autem tenetur sed a laboriosam nostrum fugiat quam laborum? Repellat officia pariatur illo!",
    },
    {
      id: 6,
      image: gallery_6,
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum illum vitae fuga nulla maiores suscipit rerum, autem tenetur sed a laboriosam nostrum fugiat quam laborum? Repellat officia pariatur illo!",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="projects" className="my-[5rem]" data-aos="fade-down">
      <h1 className="text-center md:text-5xl xs:text-3xl my-6 font-rufina text-textColor">
        Our projects
      </h1>

      <div data-aos="fade-left">
        <Carousel
          swipeable={true}
          draggable={false}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .8"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="carousel"
          responsive={responsive}
        >
          {ourProjects.map((project) => (
            <div key={project.id} className="w-full p-4 md:pl-[2.3rem]">
              <img
                src={project.image}
                alt="projectImages"
                className="w-[400px] h-[400px] rounded-xl object-center object-fill"
              />
              <h1
                className="text-center my-5 font-rufina font-bold text-2xl text-textColor"
                data-aos="fade-right"
              >
                {project.title}
              </h1>
              <p
                className="text-center font-oxygen text-lg text-textColor pr-2"
                data-aos="fade-up"
              >
                {project.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
