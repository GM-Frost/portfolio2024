import { awardsQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";
import { IAwards } from "@/typings";

import { NextResponse } from "next/server";

type Data = { awards: IAwards[] };

export async function GET() {
  const awards: IAwards[] = await sanityClient.fetch(awardsQuery);
  return NextResponse.json({ awards });
}
