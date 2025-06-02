import { projectQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";
import { IProject } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

type Data = {
  projects: IProject[];
};

export async function GET() {
  const projects: IProject[] = await sanityClient.fetch(projectQuery);
  return NextResponse.json({
    projects,
  });
}
