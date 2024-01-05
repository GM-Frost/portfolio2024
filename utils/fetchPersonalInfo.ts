import { IPersonalInfo } from "@/typings";

const fetchPersonalInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/personal`);
  const data = await res.json();
  const personalInfo: IPersonalInfo = data.personalInfo;
  return personalInfo;
};
