import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-space tracking-tight mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground mb-6">
              {personalInfo.longBio}
            </p>
            <p className="text-muted-foreground mb-8">
              I enjoy building projects from scratch, focusing on clean code and
              user experience. When I'm not coding, I love exploring new
              technologies, contributing to open source, and sharing my
              knowledge through writing and speaking.
            </p>
            <Button asChild>
              <Link href="/files/resume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
            <div className="relative rounded-xl overflow-hidden border-2 border-muted">
              <Image
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ranga Rayapudi"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}