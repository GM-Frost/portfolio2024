import { toolsQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";
import { ITechTools } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

type Data = {
  techTools: ITechTools[];
};

export async function GET() {
  const techTools: ITechTools[] = await sanityClient.fetch(toolsQuery);
  return NextResponse.json({ techTools });
}
