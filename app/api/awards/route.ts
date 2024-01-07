import { sanityClient } from "@/app/lib/sanity";
import { IAwards } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type=="award"]|order(_createdAt asc){
  _id,
  _createdAt,
  awardtitle,
  awardingbody
}
`;

type Data = {
  awards: IAwards[];
};

export async function GET() {
  const awards: IAwards[] = await sanityClient.fetch(query);
  return NextResponse.json({
    awards,
  });
}
