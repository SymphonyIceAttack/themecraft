import { readItems } from "@directus/sdk";
import {
  BookOpen,
  Calendar,
  Clock,
  Lightbulb,
  MessageSquare,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import directus from "@/lib/directus";
import type { BlogPost } from "@/types/theme";

export const metadata: Metadata = {
  title: "Blog - ThemeCraft | Theme Design Tips & Updates",
  description:
    "Read the latest articles about theme design, code editor customization, color theory, and ThemeCraft updates. Learn to create beautiful coding environments.",
  openGraph: {
    title: "Blog - ThemeCraft",
    description: "Latest articles about theme design and ThemeCraft updates.",
  },
};

export const revalidate = 86400;

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    console.log("[Blog] Fetching posts from Directus...");

    posts = await directus.request(
      readItems("posts", {
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "status",
          "imageurl",
        ],
        filter: {
          status: { _eq: "published" },
        },
        sort: ["-published_at"],
        limit: -1,
      }),
    );

    console.log("[Blog] Successfully fetched", posts.length, "posts");
  } catch (error) {
    console.error("[Blog] Error fetching posts:", error);
  }

  return (
    <div className="min-h-screen">
      {/* Modern glass header */}
      <header className="sticky top-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-xl p-2 border border-border/50 group-hover:border-primary/20 transition-all duration-300">
                  <Lightbulb className="w-7 h-7 text-primary relative z-10" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  ThemeCraft
                </h1>
                <p className="text-sm text-muted-foreground font-medium">
                  Blog
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/editor"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Start Designing
              </Link>
              <ThemeModeToggle />
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent mb-6 leading-tight">
            ThemeCraft Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore articles about theme design, code editor customization,
            color theory, and the latest updates from the ThemeCraft team.
          </p>

          {/* Blog categories */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Design Tips
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Community
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Updates
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Tutorials
            </Badge>
          </div>
        </div>

        {/* Blog posts */}
        {posts.length === 0 ? (
          <Card className="glass-dark border-border/50">
            <CardContent className="py-16 text-center">
              <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No blog posts yet
              </h3>
              <p className="text-muted-foreground mb-6">
                We're working on bringing you the latest content about theme
                design and development.
              </p>
              <Button asChild>
                <Link href="/editor">Try ThemeCraft</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="group"
              >
                <Card className="h-full glass-dark border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
                  {post.imageurl && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        fill
                        src={`https://symcloud.top/${post.imageurl}`}
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Design
                      </Badge>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Newsletter signup */}
        {posts.length > 0 && (
          <section className="mt-20">
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
              <CardContent className="py-12 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Get notified when we publish new articles about theme design
                  and development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary transition-colors"
                  />
                  <Button className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}
