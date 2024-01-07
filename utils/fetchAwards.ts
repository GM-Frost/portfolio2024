import { IAwards } from "@/typings";

export const fetchAwards = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/awards`);
  const data = await res.json();
  const awards: IAwards[] = data.awards;
  return awards;
};
