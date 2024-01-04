import { IProject } from "@/typings";

export const fetchProjects = async () => {
  //calling out the backend
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  const data = await res.json();
  const projects: IProject[] = data.projects;

  return projects;
};
