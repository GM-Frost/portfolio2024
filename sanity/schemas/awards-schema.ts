const awardsSchema = {
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    {
      name: "awardtitle",
      title: "Award Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "awardingbody",
      title: "Awarding Company",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
export default awardsSchema;
