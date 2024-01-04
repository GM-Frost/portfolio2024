const techtools = {
  name: "techtools",
  title: "TechTools",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Technology Name",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule: any) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default techtools;
