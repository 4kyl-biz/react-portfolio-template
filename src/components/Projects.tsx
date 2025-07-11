import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { SquareArrowOutUpRightIcon } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, image, tech, link, status } = project;

  const isDisabled = status !== "Done";

  return (
    <Card className="overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="object-cover h-[360px] w-full hover:scale-105 transition-transform duration-300"
        />
      </a>
      <CardContent className="flex flex-col gap-2 p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          className="mt-4 w-fit"
          disabled={isDisabled}
          asChild={!isDisabled}
          variant={isDisabled ? "secondary" : "default"}
        >
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRightIcon />
              Visit Site
            </a>
          ) : (
            status
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
