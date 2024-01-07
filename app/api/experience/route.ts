import { sanityClient } from "@/app/lib/sanity";
import { IExperience } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type=="experience"]| order(_createdAt asc)
{
  _id,
  _createdAt,
    company,
    title,
    "technologies": technologies[]-> {
    _id,
    "image": image.asset->url,
  },
    startDate,
    endDate,
    currentlyWorking,
    
    "companyimg":companyimg.asset->url,
    responsibilities[]{
      "text":children[0].text
    }
}
`;

type Data = {
  experiences: IExperience[];
};

export async function GET() {
  const experiences: IExperience[] = await sanityClient.fetch(query);
  return NextResponse.json({
    experiences,
  });
}
