import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: "esb43bsl",
  dataset: "production",
  apiVersion: "2024-01-03",
  useCdn: false,
};

const builder = imageUrlBuilder(config);

export function urlFor(source: any) {
  return builder.image(source);
}

//set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
