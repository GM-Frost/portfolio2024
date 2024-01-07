import { sanityClient } from "@/app/lib/sanity";
import { ISkills } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type=="skills"]| order(_createdAt asc)
{
  skilltitle,
    techtools[]{
     "tools":children[0].text
    }
}`;

type Data = {
  skills: ISkills[];
};

export async function GET() {
  const skills: ISkills[] = await sanityClient.fetch(query);
  return NextResponse.json({ skills });
}
