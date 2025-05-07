import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <>
      <AnimatedCursor />
      <div className="pt-24 pb-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-space tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A collection of my work and personal projects.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col border rounded-lg overflow-hidden hover:border-primary transition-colors h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold mb-3 font-space group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}