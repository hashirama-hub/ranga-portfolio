"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);

  // Animation effect for the header text
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const text = textElement.innerText;
    textElement.innerHTML = "";

    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.display = char === " " ? "inline" : "inline-block";
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      span.style.transitionDelay = `${index * 0.03}s`;
      textElement.appendChild(span);

      // Trigger animation
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, 100);
    });
  }, []);

  return (
    <section className="min-h-screen relative flex items-center pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px] [mask-image:radial-gradient(circle,white,transparent_85%)]" />

      <div className="container relative z-10">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          <div
            className="inline-block px-4 py-1.5 rounded-full border bg-muted text-sm font-medium animate-fadeUp opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {personalInfo.availability}
          </div>

          <h1
            ref={textRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space tracking-tight "
          >
            {personalInfo.name}
          </h1>
          <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold font-space tracking-tight">
            {personalInfo.title}
          </h3>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fadeUp opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {personalInfo.bio}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-4 animate-fadeUp opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Button size="lg" asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div
            className="flex items-center gap-4 mt-4 animate-fadeUp opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center items-start p-1"
            style={{
              color: "linear-gradient(#4ADE80, #22D3EE, #3B82F6, #4ADE80)",
            }}
          >
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className="w-6 h-10 rounded-full flex justify-center items-start p-1"
            style={{
              border: "px solid transparent",
              borderRadius: "9999px", // Ensures the border is rounded
              background:
                "linear-gradient(90deg, #4ADE80, #22D3EE, #3B82F6, #4ADE80)",
              backgroundClip: "border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              animation: "borderAnimation 2s infinite",
            }}
          >
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
          </div>

          <style jsx>{`
            @keyframes borderAnimation {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
