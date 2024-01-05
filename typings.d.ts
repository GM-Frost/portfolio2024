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

export interface IProject extends SanityBody {
  name: string;
  slug: string;
  image: Image;
  category: string;
  projectURL: string;
  githubURL: string;
  completionDate: string;
  description: string; // Assuming description is a string
  technologies: Technology[];
  // content: PortableTextBlock[];
}

export interface IExperience extends SanityBody {
  company: string;
  title: string;
  companyimg: Image;
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
  techtools: any[];
}

export interface ITechTools extends SanityBody {
  title: string;
  progress: number;
  image: Image;
}

export interface IPersonalInfo {
  phone: string;
  resumePDF: string;
  jobtitle: string;
  resumeDoc: string;
  image: string;
  name: string;
  email: string;
  address: string;
  about: string;
  socialLinks: SocialLink[];
}
