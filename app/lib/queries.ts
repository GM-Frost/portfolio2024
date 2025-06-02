import { groq } from "next-sanity";

/** --------------------
 * Personal Information
 * --------------------
 */
export const personalQuery = groq`
*[_type=="personalInfo"][0]
{
  phone,
  "resumePDF":pdfResume.asset->url,  
  "resumeDoc":docResume.asset->url,
  "image":profileImage.asset->url,
  name,
  jobtitle,
    email,
    address,
    about,
    socialLinks[]{
      "socialMediaName": socialMediaName,
    "url": url
    }
}
`;
/** --------------------
 * EXPERIENCE Information
 * --------------------
 */
export const experienceQuery = groq`*[_type=="experience"]| order(_createdAt asc)
{
  _id,
  _createdAt,
    company,
    title,
    "technologies": technologies[]-> {
    _id,
    "image": image.asset->url,
  },
    startDate,
    endDate,
    currentlyWorking,
    
    "companyimg":companyimg.asset->url,
    responsibilities[]{
      "text":children[0].text
    }
}
`;

/** --------------------
 * SKILLS Information
 * --------------------
 */

export const skillsQuery = groq`
  *[_type == "skills"] {
    _id,
    skilltitle,
    techtools[] {
      _key,
      tools
    }
  }
`;
/** --------------------
 * TECHTOOL Information
 * --------------------
 */

export const toolsQuery = groq`
*[_type=="techtools"]| order(_createdAt asc)
{
  progress,
  _id,
  title,
  _createdAt,
  "image":image.asset->url
}
`;

/** --------------------
 * AWARDS Information
 * --------------------
 */

export const awardsQuery = groq`
  *[_type == "award"] | order(_createdAt asc) {
    _id,
    awardtitle,
    awardingbody
  }
`;

/** --------------------
 * CERTIFICATION Information
 * --------------------
 */

export const certQuery = groq`
*[_type=="certification"]|order(_createdAt asc)
{
  certificatetitle,
  issuingbody,
  certificationurl,
  _createdAt,
  _id,
  "image": certificationimage.asset->url,
  certificatedate
}
`;

/** --------------------
 * PROJECT Query Information
 * --------------------
 */
export const projectQuery = groq`*[_type=="project"]|order(completionDate desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  category,
  projectUrl,
  githubUrl,
  "image": image.asset->url,
  description,
  completionDate,
  "technologies": technologies[]-> {
    _id,
    title,
    progress,
    "image": image.asset->url,
  }
}
`;
