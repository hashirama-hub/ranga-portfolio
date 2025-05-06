import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContactPage() {
  return (
    <>
      <AnimatedCursor />
      <div className="pt-24 pb-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-space tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Let's discuss your project or just say hello.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  );
}