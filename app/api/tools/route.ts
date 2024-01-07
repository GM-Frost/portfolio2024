import { sanityClient } from "@/app/lib/sanity";
import { ITechTools } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type=="techtools"]| order(_createdAt asc)

{
  progress,
  _id,
  title,
  _createdAt,
  "image":image.asset->url
}

`;

type Data = {
  techTools: ITechTools[];
};

export async function GET() {
  const techTools: ITechTools[] = await sanityClient.fetch(query);
  return NextResponse.json({ techTools });
}
