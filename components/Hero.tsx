"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { Cog, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Devimg from "./Devimg";
import Badge from "./Badge";
import Socials from "./Socials";

import { IPersonalInfo } from "@/typings";

import DownloadDialog from "./DownloadDialog";

type Props = {
  personalInfo: IPersonalInfo;
};

const Hero: React.FC<Props> = ({ personalInfo }) => {
  const startDate = new Date("2018-06-01");
  const endDate = new Date();
  const timeDifference: number = endDate.getTime() - startDate.getTime();
  const yearsDifference: number =
    timeDifference / (1000 * 60 * 60 * 24 * 365.25);
  const currentYears: number = Math.floor(yearsDifference);

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28  bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* TEXT */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              {personalInfo ? personalInfo.jobtitle : "Full Stack Developer"}
            </div>
            <h1 className="h1  flex gap-x-1">
              Hello, I'm Nayan<span className="animate-bounce">👋</span>
            </h1>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I help in empowering clients through transformative Full Stack
              development, turning ideas into powerful digital services and
              innovative experiences.
            </p>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <DownloadDialog personalInfo={personalInfo} />
            </div>
            {/* Socials */}
            <Socials
              socialLinks={personalInfo?.socialLinks || []}
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all duration-300"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge 1*/}
            <Badge
              containerStyles="absolute top-[24%] right-[25rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={currentYears}
              badgeText="years of experience"
            />
            {/* Badge 2*/}
            <Badge
              containerStyles="absolute top-[80%] right-[20rem]"
              icon={<RiTodoFill />}
              endCountNum={40}
              endCountText="+"
              badgeText="Full Stack Projects"
            />

            {/* Badge 3*/}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<Cog />}
              endCountNum={20}
              endCountText="+"
              badgeText="Tech Tools"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <Devimg
                imgSrc={personalInfo?.image || "/hero/developer.png"}
                containerStyles="bg-hero_share w-[510px] h-[462px] -left-12 bg-no-repeat relative bg-bottom"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
