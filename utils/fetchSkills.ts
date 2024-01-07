import { ISkills } from "@/typings";

export const fetchSkills = async () => {
  //calling backend
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);
  const data = await res.json();
  const skills: ISkills[] = data.skills;
  return skills;
};
