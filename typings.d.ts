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

export interface Project extends SanityBody {
  name: string;
  slug: string;
  image: string;
  category: string;
  projectURL: string;
  githubURL: string;
  content: PortableTextBlock[];
}
