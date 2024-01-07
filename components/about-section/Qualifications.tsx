"use client";
import { Briefcase, GraduationCap } from "lucide-react";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { IExperience } from "@/typings";
import { fetchExperience } from "@/utils/fetchExperience";

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

const Qualifications: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [experiences, setExperiences] = useState<IExperience[]>([]);

  const getData = (arr: { title: string; data: any[] }[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  // FILTER THE DATE FROM THE API
  const getYearMonth = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.toLocaleString("default", { month: "long" });
    return `${month} ${year}`;
  };

  // FETCH EXPERIENCE FROM API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const experienceData: IExperience[] = await fetchExperience();
        setExperiences([...experienceData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Experience", error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="h3 mb-8 text-cetner xl:text-left">My Journey</h3>
      {/* Experience & Education */}
      <div className="grid  md:grid-cols-2 gap-y-8">
        {/* Experience */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <Briefcase />
            <h4 className="capitalize font-semibold">Experience</h4>
          </div>
          {/* Experience List*/}
          <div>
            {loading ? (
              <div className="text-center flex items-center justify-center mt-10">
                <Loader />
              </div>
            ) : (
              experiences.map((experience) => {
                return (
                  <div key={experience._id} className="flex gap-x-5 group">
                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                    </div>
                    <img
                      src={experience.companyimg}
                      alt={experience.company}
                      className="w-8 h-8 object-contain rounded-full items-center justify-center"
                    />
                    <div className="my-2">
                      <div className="font-semibold text-xl leading-none mb-2">
                        {experience.company}
                      </div>

                      <div className="text-lg leading-none text-muted-foreground mb-3">
                        {experience.title}
                      </div>
                      <div className="text-base font-medium">
                        {getYearMonth(experience.startDate)}
                        &nbsp;&ndash;&nbsp;
                        {experience?.currentlyWorking
                          ? "Present"
                          : getYearMonth(experience.endDate)}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <GraduationCap size={28} />
            <h4 className="capitalize font-semibold">
              {getData(qualificationData, "education")?.title}
            </h4>
          </div>
          {/* Education List*/}
          <div>
            {getData(qualificationData, "education")?.data?.map(
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
