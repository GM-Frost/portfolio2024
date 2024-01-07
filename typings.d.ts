import { PortableTextBlock } from "sanity";

//TYPE DEFINITIONS
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Technology {
  _id: string;
  title: string;
  progress: number;
  image: string;
}

interface SocialLink {
  _key: string;
  socialMediaName: string;
  url: string;
}

export interface IProject extends SanityBody {
  name: string;
  slug: string;
  image: string;
  category: string;
  projectUrl: string;
  githubUrl: string;
  completionDate: string;
  description: string;
  technologies: Technology[];
}

export interface IExperience extends SanityBody {
  company: string;
  title: string;
  companyimg: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  responsibilities: PortableTextBlock[];
  technologies: Technology[];
}

export interface IAwards extends SanityBody {
  awardtitle: string;
  awardingbody: string;
}

export interface ICertificate {
  _id: string;
  issuingbody: string;
  certificationurl: string;
  image: string;
  certificatedate: string;
  certificatetitle: string;
  _createdAt?: string;
}

export interface ISkills extends SanityBody {
  skilltitle: string;
  techtools: { tools: string }[];
}

export interface ITechTools extends SanityBody {
  title: string;
  progress: number;
  image: string;
}

export interface IPersonalInfo extends SanityBody {
  name: string;
  jobtitle: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  image: string;
  socialLinks: SocialLink[];
  resumeDoc: string;
  resumePDF: string;
}
