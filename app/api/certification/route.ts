import { certQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";
import { ICertificate } from "@/typings";
import { NextResponse } from "next/server";

type Data = {
  certifications: ICertificate[];
};

export async function GET() {
  const certifications: ICertificate[] = await sanityClient.fetch(certQuery);
  return NextResponse.json({
    certifications,
  });
}
