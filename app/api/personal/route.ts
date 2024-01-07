import { sanityClient } from "@/app/lib/sanity";
import { IPersonalInfo } from "@/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type=="personalInfo"]
{
  phone,
  "resumePDF":pdfResume.asset->url,  
  "resumeDoc":docResume.asset->url,
  "image":profileImage.asset->url,
  name,
  jobtitle,
    email,
    address,
    about,
    socialLinks[]{
      "socialMediaName": socialMediaName,
    "url": url
    }
}
`;

type Data = {
  personalInfo: IPersonalInfo;
};

export async function GET() {
  const personalInfo: IPersonalInfo = await sanityClient.fetch(query);
  return NextResponse.json({
    personalInfo,
  });
}
