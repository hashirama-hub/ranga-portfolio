import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <AnimatedCursor />
      <div className="pt-24 pb-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-space tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Thoughts, ideas, and insights on web development and design.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group grid md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-4 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0 z-10" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 font-space group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {post.excerpt}
                  </p>
                  <a
                    href={`${post.slug}`}
                    target="_blank"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}