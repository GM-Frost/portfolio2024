import { sanityClient } from "@/app/lib/sanity";
import { Project } from "@/typings";
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
    "image":image.asset->url
  }`;

type Data = {
  projects: Project[];
};

export async function GET() {
  const projects: Project[] = await sanityClient.fetch(query);
  return NextResponse.json({
    projects,
  });
}
