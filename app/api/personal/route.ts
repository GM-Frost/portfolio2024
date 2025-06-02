import { projectQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";
import { IPersonalInfo } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

type Data = {
  personalInfo: IPersonalInfo;
};

export async function GET() {
  const personalInfo: IPersonalInfo = await sanityClient.fetch(projectQuery);
  return NextResponse.json({
    personalInfo,
  });
}
