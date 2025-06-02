"use client";

import React from "react";
import { IPersonalInfo } from "@/typings";
import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Calendar,
} from "lucide-react";

type Props = {
  personalInfo: IPersonalInfo;
};

const PersonalInfo: React.FC<Props> = ({ personalInfo }) => {
  const infoData: { icon: React.ReactNode; text: string }[] = [
    { icon: <User2 size={20} />, text: personalInfo.name },
    { icon: <MailIcon size={20} />, text: personalInfo.email },
    { icon: <Calendar size={20} />, text: "DOB: April 30" },
    {
      icon: <GraduationCap size={20} />,
      text: "Post Graduate in Computer Science",
    },
    { icon: <HomeIcon size={20} />, text: personalInfo.address },
  ];

  const startDate = new Date("2018-06-01");
  const endDate = new Date();
  const timeDifference = endDate.getTime() - startDate.getTime();
  const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25);
  const currentYears = Math.floor(yearsDifference);

  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-4">
        Over {currentYears} Years of Passionate Development and Innovation
      </h3>
      <p className="subtitle max-w-xl mx-auto xl:mx-0">{personalInfo.about}</p>

      {/* Icons / Info rows */}
      <div className="grid xl:grid-cols-2 gap-4 mb-12">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-4 mx-auto xl:mx-0"
          >
            <div className="text-primary">{item.icon}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-y-2">
        <div>Language Skills</div>
        <div className="border-b border-border">
          <div>English, Nepali</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
