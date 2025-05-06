"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

type SkillCategory = "all" | "frontend" | "backend" | "devops" | "tools";

export function SkillsSection() {
  const [category, setCategory] = useState<SkillCategory>("all");

  const categories: { value: SkillCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "devops", label: "DevOps" },
    { value: "tools", label: "Tools" },
  ];

  const filteredSkills = skills.filter(
    (skill) => category === "all" || skill.category === category
  );

  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-space tracking-tight mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-xl mb-8">
          I've worked with a wide range of technologies in the web development world.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                category === cat.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => {
            const IconComponent = 
              (LucideIcons[skill.icon as keyof typeof LucideIcons] || 
              LucideIcons.Code) as React.ElementType;
            
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center p-6 rounded-xl border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <IconComponent className={cn("h-12 w-12 mb-4 transition-transform duration-300 group-hover:scale-110", skill.color)} />
                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}