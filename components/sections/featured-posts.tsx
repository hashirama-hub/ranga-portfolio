import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";

export function FeaturedPosts() {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3) || [];

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-space tracking-tight mb-4">
              Latest Articles
            </h2>
            <p className="text-muted-foreground max-w-xl">
              I write about web development, design, and technology.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border h-full flex flex-col hover:border-primary transition-colors">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0 z-10" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6 flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-space group-hover:text-primary transition-colors">
                  <a href={`${post.slug}`} target="_blank">{post.title}</a>
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                <a
                    href={`${post.slug}`}
                    target="_blank"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}