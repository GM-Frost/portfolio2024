import { ITechTools } from "@/typings";

export const fetchTools = async () => {
  //getting data from backend
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tools`);
  const data = await res.json();
  const techtools: ITechTools[] = data.techTools;

  return techtools;
};
