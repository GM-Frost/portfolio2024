import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-03",
  useCdn: false,
};

const builder = imageUrlBuilder(config);

export function urlFor(source: any) {
  return builder.image(source);
}

//set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
