import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-space tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of projects I've worked on, showcasing my skills and experience.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group grid md:grid-cols-12 gap-6 items-center",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              <div 
                className={cn(
                  "md:col-span-7 rounded-lg overflow-hidden border relative",
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                )}
              >
                <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div 
                className={cn(
                  "md:col-span-5",
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                )}
              >
                <h3 className="text-2xl font-bold mb-4 font-space">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}