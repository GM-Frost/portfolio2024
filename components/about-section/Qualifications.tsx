"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";
import { IExperience } from "@/typings";

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Loyalist College",
        qualification:
          "Post Graduate in Computer Software & Database Development",
        years: "2022",
        location: "Belleville, ON, Canada",
      },
      {
        university: "Canadore College",
        qualification:
          "Post Graduate in Project Management - Information Technology",
        years: "2020",
        location: "North York, ON, Canada",
      },
      {
        university: "Leeds Beckett University",
        qualification: "Bachelor of Science in Computing (Hons)",
        years: "2018",
        location: "Leeds, United Kingdom",
      },
    ],
  },
];

type Props = {
  experiencesInfo: IExperience[];
};

const Qualifications: React.FC<Props> = ({ experiencesInfo }) => {
  // Helper to find the “education” section in the static qualificationData:
  const getData = (arr: { title: string; data: any[] }[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  // Convert ISO date string to “Month Year”:
  const getYearMonth = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.toLocaleString("default", { month: "long" });
    return `${month} ${year}`;
  };

  // Sort experiences
  const sortedExperiences = [...experiencesInfo].sort((a, b) => {
    const aEnd = a.currentlyWorking ? new Date() : new Date(a.endDate);
    const bEnd = b.currentlyWorking ? new Date() : new Date(b.endDate);

    // Compare by end date (descending)
    if (aEnd.getTime() !== bEnd.getTime()) {
      return bEnd.getTime() - aEnd.getTime();
    }

    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <div>
      <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>

      <div className="grid md:grid-cols-2 gap-y-8">
        {/* ── Experience Column ── */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <Briefcase />
            <h4 className="capitalize font-semibold">Experience</h4>
          </div>

          {/* Map over sortedExperiences */}
          <div>
            {sortedExperiences.length === 0 ? (
              <p>No experience data available.</p>
            ) : (
              sortedExperiences.map((experience) => (
                <div key={experience._id} className="flex gap-x-5 group">
                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                  </div>

                  {/* Company logo or image */}
                  <img
                    src={experience.companyimg}
                    alt={experience.company}
                    className="w-8 h-8 object-contain rounded-full"
                  />

                  <div className="my-2">
                    <div className="font-semibold text-xl leading-none mb-2">
                      {experience.company}
                    </div>
                    <div className="text-lg leading-none text-muted-foreground mb-3">
                      {experience.title}
                    </div>
                    <div className="text-base font-medium">
                      {getYearMonth(experience.startDate)} &nbsp;&ndash;&nbsp;
                      {experience.currentlyWorking
                        ? "Present"
                        : getYearMonth(experience.endDate)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ── Education Column (static) ── */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <GraduationCap size={28} />
            <h4 className="capitalize font-semibold">
              {getData(qualificationData, "education")?.title}
            </h4>
          </div>

          <div>
            {getData(qualificationData, "education")?.data.map(
              (
                item: {
                  university: string;
                  qualification: string;
                  years: string;
                  location: string;
                },
                index: number
              ) => {
                const { university, qualification, years, location } = item;
                return (
                  <div key={index} className="flex gap-x-5 group">
                    <div className="h-[120px] w-[1px] bg-border relative ml-2">
                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[105px] transition-all duration-500"></div>
                    </div>

                    <div className="my-2">
                      <div className="font-semibold text-xl leading-none mb-2">
                        {university}
                      </div>
                      <div className="text-lg leading-none text-muted-foreground mb-1">
                        {qualification}
                      </div>
                      <div className="text-base font-medium">{years}</div>
                      <div className="text-sm font-medium">{location}</div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
