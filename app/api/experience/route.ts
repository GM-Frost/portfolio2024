import { experienceQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";
import { IExperience } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

type Data = {
  experiences: IExperience[];
};

export async function GET() {
  const experiences: IExperience[] = await sanityClient.fetch(experienceQuery);
  return NextResponse.json({
    experiences,
  });
}
