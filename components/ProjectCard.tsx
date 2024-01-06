import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { GithubIcon, PlayIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ProjectCard = ({ project }) => {
  const maxLength = 200;
  const truncatedDescription = project.description.slice(0, maxLength);

  return (
    <Card className="group overflow-hidden relative" key={project._id}>
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:dark:bg-work_project_bg_dark xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={245}
            height={250}
            alt={project.name}
            priority
          />
          {/* Buttons */}
          <div className="flex gap-x-8">
            <Link
              href={project?.projectUrl ? project.projectUrl : "#"}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <PlayIcon className="text-white hover:scale-125 transition-all duration-300" />
            </Link>
            <Link
              href={project?.githubUrl ? project.githubUrl : "#"}
              target="_blank"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <GithubIcon className="text-white hover:scale-125 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <div className="flex gap-2 justify-end items-center">
          {project?.technologies?.slice(0, 5).map((tech: any) => (
            <Avatar key={tech._id}>
              <AvatarImage src={tech.image} />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">
          {truncatedDescription}...
          <span>
            <Button variant="link">Read More</Button>
          </span>
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
