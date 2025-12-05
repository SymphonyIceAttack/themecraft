import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MarkdownWithIds } from "@/components/blog/markdown-with-ids";
import { PostCTA } from "@/components/blog/post-cta";
import { RecentPosts } from "@/components/blog/recent-posts";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import directus from "@/lib/directus";

// Blog Navigation Component
function BlogNavigation() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced logo section */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-xl p-2 border border-border/50 group-hover:border-primary/20 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-primary relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent flex items-center gap-2">
                ThemeCraft
                <svg
                  className="w-4 h-4 text-accent animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              <p className="text-sm text-muted-foreground font-medium">
                Professional Theme Designer
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/posts"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Blog
            </a>
            <a
              href="/about"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              About
            </a>
            <a
              href="/faq"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              FAQ
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              Contact
            </a>
            <a
              href="/editor"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              Start Designing
            </a>
            <ThemeModeToggle />
          </nav>

          {/* Mobile theme toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      notFound();
    }

    const { title, content, description, published_at, imageurl } = post;

    const recentPosts = await directus.request(
      readItems("posts", {
        filter: {
          status: { _eq: "published" },
          slug: { _neq: slug },
        },
        fields: ["id", "title", "slug", "description", "published_at"],
        sort: ["-published_at"],
        limit: 6,
      }),
    );

    return (
      <>
        <BlogNavigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900 py-8 px-4 sm:py-12">
          <div className="max-w-7xl mx-auto">
            {isEnabled && (
              <Card className="mb-6 border-purple-500 dark:border-purple-600 bg-purple-50 dark:bg-purple-950/30">
                <CardContent className="py-3">
                  <p className="text-sm font-medium text-purple-900 dark:text-purple-200">
                    Draft mode enabled - You are previewing unpublished content
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <article className="flex-1 min-w-0 order-2 lg:order-1">
                <Card className="border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-balance text-gray-900 dark:text-white">
                      {title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {new Date(published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    {description && (
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 text-pretty">
                        {description}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    {imageurl && (
                      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] mb-6 lg:mb-8 rounded-lg overflow-hidden">
                        <Image
                          fill={true}
                          src={`https://symcloud.top/${imageurl}`}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20">
                      <MarkdownWithIds content={content} />
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 lg:mt-8">
                  <PostCTA />
                </div>

                <div className="mt-6 lg:mt-8">
                  <RecentPosts posts={recentPosts} />
                </div>
              </article>

              <aside className="w-full lg:w-64 shrink-0 order-1 lg:order-2">
                <div className="lg:sticky lg:top-8">
                  <TableOfContents content={content} />
                </div>
              </aside>
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("[v0] Error fetching post:", error);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          status: {
            _eq: "published",
          },
        },
        limit: -1,
      }),
    );

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("[v0] Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      return {
        title: "Post not found",
      };
    }

    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: "Post not found",
    };
  }
}
