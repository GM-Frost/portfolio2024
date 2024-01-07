const certificationSchema = {
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    {
      name: "certificatetitle",
      title: "Certification Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "issuingbody",
      title: "Issuing Company",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "certificatedate",
      title: "Certification Date",
      type: "date",
    },
    {
      name: "certificationurl",
      title: "Certification URL",
      type: "url",
    },
    {
      name: "certificationimage",
      title: "Certification Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default certificationSchema;
