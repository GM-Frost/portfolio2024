"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import React from "react";
import { ISkills, ITechTools } from "@/typings";

type Props = {
  skillsInfo: ISkills[];
  techToolsInfo: ITechTools[];
};

const Skills: React.FC<Props> = ({ skillsInfo, techToolsInfo }) => {
  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-8">Technical Stack</h3>

      {/* SKILLS LIST */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">Skills</h4>
        <div className="border-b border-border mb-4"></div>

        {/* Render each skill as a tooltip */}
        <div className="md:grid md:grid-cols-2">
          {skillsInfo.map((skill) => (
            <TooltipProvider key={skill._id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-full font-medium cursor-pointer hover:text-primary text-center xl:text-left mx-auto xl:mx-0">
                    {skill.skilltitle}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {skill.techtools.map((tech, index) => (
                      <div className="text-primary" key={index}>
                        {tech.tools}
                      </div>
                    ))}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* TECH TOOLS CAROUSEL */}
      <div>
        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
        <div className="border-b border-border mb-4">
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 2,
            }}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper cursor-pointer h-[170px] max-w-[600px] mx-auto xl:mx-0"
            style={{ width: "100%" }}
          >
            {techToolsInfo.map((tool) => (
              <SwiperSlide key={tool._id}>
                <Avatar className="relative h-12 w-12 justify-center items-center">
                  <AvatarImage src={tool.image} alt={tool.title} />
                  <AvatarFallback>{tool.title.charAt(0)}</AvatarFallback>
                </Avatar>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
