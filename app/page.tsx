import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FeaturedPosts } from "@/components/sections/featured-posts";
import { ContactSection } from "@/components/sections/contact-section";
import { AnimatedCursor } from "@/components/ui/animated-cursor";

export default function Home() {
  return (
    <>
      <AnimatedCursor />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceSection />
      <TestimonialsSection />
      <FeaturedPosts />
      <ContactSection />
    </>
  );
}