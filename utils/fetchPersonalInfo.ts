// import { IPersonalInfo } from "@/typings";

// const fetchPersonalInfo = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/personal`);
//   const data = await res.json();
//   const info: IPersonalInfo = data.personalInfo;
//   return info;
// };

// export default fetchPersonalInfo;

import { IPersonalInfo } from "@/typings";

export const fetchPersonalInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/personal`);
  const data = await res.json();
  const info: IPersonalInfo[] = data.personalInfo;
  return info;
};
