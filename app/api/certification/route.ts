import { sanityClient } from "@/app/lib/sanity";
import { ICertificate } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type=="certification"]|order(_createdAt asc)
{
  certificatetitle,
  issuingbody,
  certificationurl,
  _createdAt,
  _id,
  "image": certificationimage.asset->url,
  certificatedate
}
`;

type Data = {
  certifications: ICertificate[];
};

export async function GET() {
  const certifications: ICertificate[] = await sanityClient.fetch(query);
  return NextResponse.json({
    certifications,
  });
}
