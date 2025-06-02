import { skillsQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";
import { ISkills } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

type Data = {
  skills: ISkills[];
};

export async function GET() {
  const skills: ISkills[] = await sanityClient.fetch(skillsQuery);
  return NextResponse.json({ skills });
}
