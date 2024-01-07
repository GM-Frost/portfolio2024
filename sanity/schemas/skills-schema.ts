const skills = {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "skilltitle",
      title: "Skill Title",
      type: "string",
    },
    {
      name: "techtools",
      title: "Tech Tools",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default skills;
