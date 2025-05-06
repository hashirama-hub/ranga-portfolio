"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-bold font-space tracking-tight mb-4">
          What People Say
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          Don't just take my word for it - here's what others have to say about working with me.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-6">
                <Card className="h-full border">
                  <CardContent className="px-6 py-8 h-full flex flex-col">
                    <Quote className="h-6 w-6 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 flex-1">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full overflow-hidden h-12 w-12 border">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}