"use client";
import { Divide } from "lucide-react";
import Socials from "./Socials";
import { IPersonalInfo } from "@/typings";
import { useEffect, useState } from "react";
import fetchPersonalInfo from "@/utils/fetchPersonalInfo";

const Footer = () => {
  const date = new Date().getFullYear();

  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>();

  useEffect(() => {
    const fetchInfomation = async () => {
      try {
        const response = await fetchPersonalInfo();
        setPersonalInfo(response[0]);
      } catch (error) {
        console.error("Error fetching personal information:", error);
      }
    };

    fetchInfomation();
  }, []);

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
            socialLinks={personalInfo?.socialLinks || []}
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary duration-300 transition-colors"
          />
          <div className="text-muted-foreground">
            Copyright &copy; {date} - Nayan Bastola.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
