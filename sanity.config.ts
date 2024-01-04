import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "esb43bsl",
  dataset: "production",
  title: "Personal Website 2024",
  apiVersion: "2024-01-03",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});
