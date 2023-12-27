"use client";
import {
  RiLinkedinFill,
  RiFacebookFill,
  RiDiscordFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiDiscordFill />,
  },

  {
    path: "/",
    name: <RiGithubFill />,
  },

  {
    path: "/",
    name: <RiInstagramFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, i) => {
        return (
          <Link href={icon.path} key={i}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
