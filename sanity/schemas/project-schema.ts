const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Title of Project",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      description: "Category of Project",
      type: "string",
      options: {
        list: [
          { title: "React", value: "react" },
          { title: "Next JS", value: "nextjs" },
          { title: "Python", value: "python" },
          { title: "Java", value: "java" },
          { title: "Others", value: "others" },
        ],
      },
    },
    {
      name: "projectUrl",
      title: "ProjectURL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "GithubURL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
