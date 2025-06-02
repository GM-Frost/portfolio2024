export const dynamic = "force-dynamic";

import { projectQuery } from "@/app/lib/queries";
import { sanityClient } from "@/app/lib/sanity";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IProject } from "@/typings";

type ProjectCategory = "all projects" | string;

export default async function ProjectsPage() {
  // 1) Fetch all projects from Sanity
  const allProjects: IProject[] = await sanityClient.fetch(projectQuery);

  // 2) Derive unique categories
  const uniqueCategories: ProjectCategory[] = [
    "all projects",
    ...Array.from(new Set(allProjects.map((p) => p.category))),
  ];

  // We’ll keep “all projects” as the default category
  const defaultCategory: ProjectCategory = "all projects";

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* ── Tabs (server‐rendered) ── */}
        <Tabs defaultValue={defaultCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-6 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {uniqueCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ── Tabs Content ── */}
          {uniqueCategories.map((category) => {
            // For each category, filter the projects array server‐side
            const filteredProjects =
              category === "all projects"
                ? allProjects
                : allProjects.filter((p) => p.category === category);

            return (
              <TabsContent value={category} key={category}>
                {filteredProjects.length === 0 ? (
                  <p className="text-center mt-8 text-xl">
                    No projects found in “{category}”
                  </p>
                ) : (
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((proj) => (
                      <ProjectCard key={proj._id} project={proj} />
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
