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
