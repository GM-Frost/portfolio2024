"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

//Importing Required modules
import { Pagination } from "swiper/modules";

//Components
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

//getting sanity project data

const projectData = [
  {
    image: "/work/2.png",
    category: "python",
    name: "Gain Strom",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Gym Website",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "CSS Animation Effects",
    name: "Somethign Else",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Django",
    name: "Particules Website",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "React",
    name: "Food Website",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
];
const Works = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="items-center max-w-[400px] mx-auto xl:mx-0 text-cetner xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          <h2 className="section-title mb-4">Recent Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            praesentium quia repudiandae, veniam adipisci dignissimos possimus
            voluptas reprehenderit ullam. Aliquam itaque inventore fuga quae quo
            minus quisquam deleniti eaque? Reiciendis.
          </p>
          <Link href="/projects">
            <Button>See All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[200px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[150px]"
            slidesPerView={5}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={5}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {/* Show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
