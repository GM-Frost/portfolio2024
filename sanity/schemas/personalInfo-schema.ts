const personalInfo = {
  name: "personalInfo",
  title: "Personal Info",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "text",
    },
    {
      name: "profileImage",
      title: "Profile Image",
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
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          name: "socialLink",
          title: "Social Link",
          type: "object",
          fields: [
            {
              name: "socialMediaName",
              title: "Social Media Name",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "docResume",
      title: "Docx Resume",
      type: "file",
      options: {
        accept: ".doc,.docx",
      },
    },
    {
      name: "pdfResume",
      title: "PDF Resume",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
  ],
};

export default personalInfo;
