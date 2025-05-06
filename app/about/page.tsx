import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AnimatedCursor } from "@/components/ui/animated-cursor";

export default function AboutPage() {
  return (
    <>
      <AnimatedCursor />
      <div className="pt-24 pb-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-space tracking-tight mb-4">
            About Me
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Learn more about my background, skills, and experience.
          </p>
        </div>
      </div>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection />
    </>
  );
}