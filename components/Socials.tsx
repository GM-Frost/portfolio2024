"use client";
import {
  RiLinkedinFill,
  RiFacebookFill,
  RiDiscordFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";

interface SocialLink {
  socialMediaName: string;
  _key: string;
  url: string;
}

const iconsMapping: Record<string, JSX.Element> = {
  LinkedIn: <RiLinkedinFill />,
  Facebook: <RiFacebookFill />,
  Discord: <RiDiscordFill />,
  Github: <RiGithubFill />,
  Instagram: <RiInstagramFill />,
};

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
  socialLinks?: SocialLink[];
}

const Socials: React.FC<SocialsProps> = ({
  containerStyles,
  iconsStyles,
  socialLinks,
}) => {
  return (
    <div className={`${containerStyles}`}>
      {socialLinks?.map((socialLink, index) => {
        const icon = iconsMapping[socialLink.socialMediaName];

        if (icon) {
          return (
            <Link
              href={socialLink.url}
              key={socialLink._key || index}
              target="_blank"
            >
              <div className={`${iconsStyles}`}>{icon}</div>
            </Link>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Socials;
