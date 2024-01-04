"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import { TabsContent } from "@radix-ui/react-tabs";
import { fetchProjects } from "@/utils/fetchProjects";
import { Project } from "@/typings";

const Projects = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [project, setProject] = useState<string>("all projects");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProjects: Project[] = await fetchProjects();
        const uniqueCategories = [
          "all projects",
          ...(Array.from(
            new Set(allProjects.map((item) => item.category))
          ) as string[]),
        ];

        setCategories([...uniqueCategories]);
        setProjectData([...allProjects]);
      } catch (error) {
        console.error("Error fetching projects");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {loading && <div className="text-center">Loading...</div>}
        {/* Tabs */}
        <Tabs defaultValue={project} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => (
              <TabsTrigger
                onClick={() => setProject(category)}
                key={index}
                value={category}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {projectData
              .filter((filterData) =>
                project === "all projects"
                  ? filterData
                  : (filterData as { category: string }).category === project
              )
              .map((projectItem, index) => (
                <TabsContent value={project} key={index}>
                  <ProjectCard project={projectItem} />
                </TabsContent>
              ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
