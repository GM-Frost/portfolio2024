import { Project } from "@/typings";

export const fetchProjects = async () => {
  //calling out the backend
  const res = await fetch(`http://localhost:3000/api/projects`);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
