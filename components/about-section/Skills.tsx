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

//Importing Required modules
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";
import { ISkills, ITechTools } from "@/typings";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchTools } from "@/utils/fetchTools";

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [techTools, setTechTools] = useState<ITechTools[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSkillsData = async () => {
      setLoading(true);
      try {
        const skillsData: ISkills[] = await fetchSkills();
        setSkills([...skillsData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Awards", error);
        setLoading(true);
      }
    };

    fetchSkillsData();
  }, []);

  useEffect(() => {
    const fetchTechTools = async () => {
      setLoading(true);
      try {
        const techToolsData: ITechTools[] = await fetchTools();
        setTechTools([...techToolsData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Awards", error);
        setLoading(true);
      }
    };

    fetchTechTools();
  }, []);

  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-8">Technical Stack</h3>
      {/* Skills */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">Skills</h4>
        <div className="border-b border-border mb-4"></div>
        {/* SKILLS LIST */}
        <div className="md:grid md:grid-cols-2">
          {skills.map((skill) => (
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
      {/* Tools */}
      <div>
        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
        <div className="border-b border-border mb-4">
          {/* Tools List */}
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
            {techTools.map((tools) => (
              <SwiperSlide key={tools._id}>
                <Avatar className="relative h-12 w-12 justify-center items-center">
                  <AvatarImage src={tools.image} alt="@shadcn" />
                  <AvatarFallback>T</AvatarFallback>
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
