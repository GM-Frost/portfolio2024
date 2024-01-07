import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-03",
  useCdn: false,
};

//set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
