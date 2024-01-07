const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      description: "Name of the company",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      description: "Title of the position",
      type: "string",
    },
    {
      name: "companyimg",
      title: "Company Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "startDate",
      title: "Start Date",
      description: "Start date of the position",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      description: "End date of the position",
      type: "date",
    },
    {
      name: "currentlyWorking",
      title: "Currently Working",
      type: "boolean",
    },
    {
      name: "responsibilities",
      title: "Responsibility",
      description: "Roles of the position",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "technologies",
      title: "Technologies",
      description: "Technologies used in the position",
      type: "array",
      of: [{ type: "reference", to: { type: "techtools" } }],
    },
  ],
};
export default experience;
