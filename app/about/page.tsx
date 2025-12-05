import { Award, Lightbulb, Mail, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us - ThemeCraft | Professional Theme Designer",
  description:
    "Learn about ThemeCraft - the professional theme designer for VSCode, Cursor, Zed, Neovim, and Helix. Our mission is to make theme creation effortless.",
  openGraph: {
    title: "About Us - ThemeCraft",
    description:
      "Professional theme designer for code editors. Create beautiful themes with our visual editor.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
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
                <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent block">
                  ThemeCraft
                </span>
                <p className="text-sm text-muted-foreground font-medium">
                  About Us
                </p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent mb-6 leading-tight">
            About ThemeCraft
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make theme creation effortless, accessible,
            and professional for developers worldwide. Our platform empowers you
            to design beautiful, functional themes for your favorite code
            editors.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-muted/30 to-muted/10 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                ThemeCraft was born from the frustration of limited theme
                customization options in code editors. As developers, we spent
                countless hours trying to create the perfect coding environment
                that would reduce eye strain and boost productivity.
              </p>
              <p>
                We realized that the process of theme creation was unnecessarily
                complex and often required deep technical knowledge. So we set
                out to build a solution that would democratize theme design -
                making it accessible to everyone, regardless of their technical
                background.
              </p>
              <p>
                Today, ThemeCraft serves thousands of developers, designers, and
                coding enthusiasts who trust our platform to create stunning,
                professional themes for their development workflows.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Our Mission, Vision, Values */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make theme creation as easy as designing graphics,
                  empowering developers to create beautiful, functional coding
                  environments that enhance their productivity and reduce eye
                  strain.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where every developer can customize their coding
                  environment with ease, leading to more productive,
                  comfortable, and enjoyable programming experiences across all
                  code editors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-muted/20 to-muted/10 border-border/50 hover:border-border/80 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-muted-foreground" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Accessibility over complexity</li>
                  <li>• User experience first</li>
                  <li>• Continuous innovation</li>
                  <li>• Community-driven development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools designed to make theme creation simple
              and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Visual Theme Editor</CardTitle>
                <CardDescription>
                  Intuitive color picker and real-time controls for precise
                  theme customization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Live Preview System</CardTitle>
                <CardDescription>
                  See your theme changes instantly with our real-time code
                  syntax preview
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Multi-Platform Export</CardTitle>
                <CardDescription>
                  Export themes for VSCode, Cursor, Zed, Neovim, Helix, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Team/Company Info */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-muted/20 to-muted/5 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Our Team</CardTitle>
              <CardDescription>
                Passionate developers and designers dedicated to improving your
                coding experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                ThemeCraft is built by a team of experienced developers who
                understand the challenges of long coding sessions and the
                importance of a comfortable, personalized development
                environment. Our combined expertise in software development,
                UI/UX design, and color theory drives every feature we create.
              </p>

              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  Remote-First
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  Open Source
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  Community-Driven
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Want to Learn More?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Have questions about ThemeCraft? We'd love to hear from you and
                discuss how we can improve your theme creation experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </Button>
                </Link>
                <Button variant="outline" asChild>
                  <Link href="/">Try ThemeCraft</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
