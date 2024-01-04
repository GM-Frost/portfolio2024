import { sanityClient } from "@/app/lib/sanity";
import { IProject } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type=="project"]{
    _id,
    _createdAt,
    name,
  "slug":slug.current,
  category,
  projectURL,
    githubURL,
    "image":image.asset->url,
    description,
    "technologies":technologies[]-> {
      _id,
      title,
      progress,
      "image": image.asset->url,
    }
  }`;

type Data = {
  projects: IProject[];
};

export async function GET() {
  const projects: IProject[] = await sanityClient.fetch(query);
  return NextResponse.json({
    projects,
  });
}
