"use client";
import Devimg from "./Devimg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  IAwards,
  ICertificate,
  IExperience,
  ISkills,
  ITechTools,
} from "@/typings";
import { fetchExperience } from "@/utils/fetchExperience";
import Loader from "./Loader";

import { fetchAwards } from "@/utils/fetchAwards";
import { fetchCertificate } from "@/utils/fetchCertificate";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { fetchSkills } from "@/utils/fetchSkills";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

//Importing Required modules
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { fetchTools } from "@/utils/fetchTools";
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Nayan Bastola",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+1(437)993-4636",
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
    text: "Master in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Toronto, ON, Canada",
  },
];

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

const skillData = [
  {
    title: "skills",
    data: [
      {
        icon: "",
        name: "HTML CSS",
      },
      {
        icon: "",
        name: "Full Stack Development",
      },
      {
        icon: "",
        name: "Front-end Development",
      },
      {
        icon: "",
        name: "Database Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
        name: "VSCode",
      },
      {
        imgPath: "/about/figma.svg",
        name: "Figma",
      },
      {
        imgPath: "/about/notion.svg",
        name: "Notion",
      },
      {
        imgPath: "/about/wordpress.svg",
        name: "Wordpress",
      },
    ],
  },
];

const About = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [allCertifications, setAllCertifications] = useState<ICertificate[]>(
    []
  );
  const [awards, setAwards] = useState<IAwards[]>([]);
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [techTools, setTechTools] = useState<ITechTools[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    const fetchAwardsData = async () => {
      setLoading(true);
      try {
        const awardsData: IAwards[] = await fetchAwards();
        setAwards([...awardsData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Awards", error);
        setLoading(true);
      }
    };

    fetchAwardsData();
  }, []);

  useEffect(() => {
    const fetchCertificatesData = async () => {
      setLoading(true);
      try {
        const certiData: ICertificate[] = await fetchCertificate();
        if (certiData) {
          setAllCertifications([...certiData]);
        } else {
          console.error("Received undefined data from the API");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching certificates", error);
        setLoading(false);
      }
    };

    fetchCertificatesData();
  }, []);

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

  const getYearMonth = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.toLocaleString("default", { month: "long" });
    return `${month} ${year}`;
  };
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Images */}
          <div className="hidden xl:flex flex-1 relative">
            <Devimg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="achievements"
                >
                  Achievements
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Deliver quality for over 15 years{" "}
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus amet ipsam at provident repellendus illo velit
                      cupiditate fuga praesentium, incidunt, eveniet placeat
                      reprehenderit eos ipsa doloremque sint asperiores deleniti
                      blanditiis.
                    </p>
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
                        <div>English, Nepali, Japanese</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* QUALIFICATION INFO */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-cetner xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience & Education */}
                    <div className="grid  md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-semibold">
                            Experience
                          </h4>
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
                                <div
                                  className="flex gap-x-5 group"
                                  key={experience._id}
                                >
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
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* Education List*/}
                        <div>
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const {
                                university,
                                qualification,
                                years,
                                location,
                              } = item;
                              return (
                                <div className="flex gap-x-5 group" key={index}>
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
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                    <div className="text-sm font-medium">
                                      {location}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* SKILLS INFO */}
                <TabsContent value="skills">
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
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
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
                          className="mySwiper h-[170px] max-w-[600px] mx-auto xl:mx-0"
                          style={{ width: "100%" }}
                        >
                          {techTools.map((tools, index) => (
                            <SwiperSlide>
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
                </TabsContent>

                {/* Achievement INFO */}
                <TabsContent value="achievements">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Certification & Achievements</h3>
                    {/* Achievement */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">
                        Certifications
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* SKILLS LIST */}
                      <div>
                        {allCertifications.map((certificate) => (
                          <>
                            <div key={certificate._id}>
                              <div className="font-medium flex gap-x-5 justify-center">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={certificate.image} />
                                  <AvatarFallback>T</AvatarFallback>
                                </Avatar>
                                {certificate.certificatetitle} &mdash;{" "}
                                <span className="subtitle">
                                  {certificate.issuingbody}
                                </span>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    {/* Awards */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Awards
                      </h4>
                      <div className="border-b border-border mb-4">
                        {/* Tools List */}
                        <div className="grid xl:grid-cols-2 justify-center xl:gap-x-8 xl:justify-start">
                          {!loading && awards.length === 0 ? (
                            <div className="text-center flex items-center justify-center mt-10">
                              <Loader />
                            </div>
                          ) : (
                            <>
                              {awards.map((award) => (
                                <div key={award._id}>
                                  {award.awardtitle} &mdash;{" "}
                                  <span className="subtitle">
                                    {award.awardingbody}
                                  </span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
