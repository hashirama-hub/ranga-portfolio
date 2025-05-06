import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-space tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          My professional journey in software development.
        </p>

        <div className="relative border-l-2 border-muted pl-6 ml-3">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="mb-12 last:mb-0 relative"
            >
              <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>
              
              <div className="mb-1 text-sm text-muted-foreground">
                {experience.duration}
              </div>
              <h3 className="text-xl font-bold mb-1 font-space">
                {experience.position}
              </h3>
              <div className="text-primary font-medium mb-3">
                {experience.company}
              </div>
              <p className="text-muted-foreground">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}