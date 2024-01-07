"use client";
import { IPersonalInfo } from "@/typings";
import { fetchPersonalInfo } from "@/utils/fetchPersonalInfo";
import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

import React, { useEffect, useState } from "react";

type Props = {};

const defaultInfoData: { icon: React.ReactNode; text: string }[] = [
  {
    icon: <User2 size={20} />,
    text: "Nayan Bastola",
  },
  {
    icon: <MailIcon size={20} />,
    text: "nayanbastola111@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "DOB: April 30",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Post Graduate in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Toronto, ON, Canada",
  },
];

const PersonalInfo: React.FC = (props: Props) => {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>();
  const [infoData, setInfoData] = useState(defaultInfoData);

  useEffect(() => {
    const fetchInfomation = async () => {
      try {
        const response = await fetchPersonalInfo();
        setPersonalInfo(response[0]);

        const updateInfoData = [
          {
            icon: <User2 size={20} />,
            text: response[0]?.name,
          },
          {
            icon: <MailIcon size={20} />,
            text: response[0]?.email,
          },
          {
            icon: <Calendar size={20} />,
            text: "DOB: April 30",
          },
          {
            icon: <GraduationCap size={20} />,
            text: "Post Graduate in Computer Science",
          },
          {
            icon: <HomeIcon size={20} />,
            text: response[0]?.address,
          },
        ];

        setInfoData(updateInfoData);
      } catch (error) {
        console.error("Error fetching personal information:", error);
      }
    };

    fetchInfomation();
  }, []);

  const startDate = new Date("2018-06-01");
  const endDate = new Date();
  const timeDifference: number = endDate.getTime() - startDate.getTime();
  const yearsDifference: number =
    timeDifference / (1000 * 60 * 60 * 24 * 365.25);
  const currentYears: number = Math.floor(yearsDifference);

  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-4">
        Over {currentYears} Years of Passionate Development and Innovation
      </h3>
      <p className="subtitle max-w-xl mx-auto xl:mx-0">{personalInfo?.about}</p>
      {/* Icons */}
      <div className="grid xl:grid-cols-2 gap-4 mb-12">
        {infoData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-x-4 mx-auto xl:mx-0"
            >
              <div className="text-primary">{item.icon}</div>
              <div>{item.text}</div>
            </div>
          );
        })}
      </div>
      {/* Languages */}
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
