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
  {
    title: "experience",
    data: [
      {
        company: "NCR Corporation",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/NCR_Corporation_logo.svg",
        role: "Full Stack Developer",
        fromDate: "April 2023",
        toDate: "Present",
        location: "Remote",
      },
      {
        company: "Yamaha Motors Canada",
        icon: "https://i.ebayimg.com/images/g/8vsAAOSwctJb~DWO/s-l1600.gif",
        role: "Full Stack Developer",
        fromDate: "February 2021",
        toDate: "April 2023",
        location: "Toronto, ON, Canada",
      },
      {
        company: "Ananda Adventure & Treks",
        icon: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/hiking-logo-design-768x614.jpg",
        role: "Full Stack Developer",
        fromDate: "June 2018",
        toDate: "December 2020",
        location: "Remote",
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

const achievementData = [
  {
    title: "certifications",
    data: [
      {
        icon: "",
        name: "Data Structire & Algorithms",
        institute: "FreeCodeCamp",
      },
      {
        icon: "",
        name: "Backend Development & API",
        institute: "FreeCodeCamp",
      },
      {
        icon: "",
        name: "PCAP-Python Certified Associate",
        institute: "Cisco - OpenEDG",
      },
    ],
  },
  {
    title: "awards",
    data: [
      {
        name: "Dean's Award",
        institute: "Loyalist College",
      },
      {
        name: "Honour's Award",
        institute: "Leeds Beckett University",
      },
    ],
  },
];

const About = () => {
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
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* Experience List*/}
                        <div>
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, fromDate, toDate, icon } =
                                item;
                              return (
                                <div className="flex gap-x-5 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <img
                                    src={icon}
                                    alt={company}
                                    className="w-8 h-8 object-contain rounded-full items-center justify-center"
                                  />
                                  <div className="my-2">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>

                                    <div className="text-lg leading-none text-muted-foreground mb-3">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {fromDate}&nbsp;&ndash;&nbsp;{toDate}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
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
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4">
                        {/* Tools List */}
                        <div className="flex gap-x-8 justify-center xl:justify-start">
                          {getData(skillData, "tools").data.map((item) => {
                            const { imgPath, name } = item;
                            return (
                              <div key={name}>
                                <Image
                                  src={imgPath}
                                  alt={name}
                                  width={48}
                                  height={48}
                                  priority
                                />
                              </div>
                            );
                          })}
                        </div>
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
                        {getData(achievementData, "certifications").data.map(
                          (item, index) => {
                            const { name, icon, institute } = item;
                            return (
                              <div key={index}>
                                <div className="font-medium">
                                  {name} &mdash;{" "}
                                  <span className="subtitle">{institute}</span>
                                </div>
                              </div>
                            );
                          }
                        )}
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
                          {getData(achievementData, "awards").data.map(
                            (item) => {
                              const { name, institute } = item;
                              return (
                                <div key={name}>
                                  {name} &mdash;{" "}
                                  <span className="subtitle">{institute}</span>
                                </div>
                              );
                            }
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
