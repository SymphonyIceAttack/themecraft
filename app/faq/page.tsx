import { HelpCircle, Lightbulb, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FAQ - ThemeCraft | Frequently Asked Questions",
  description:
    "Find answers to common questions about ThemeCraft - how to use our theme designer, export options, and technical support.",
  openGraph: {
    title: "FAQ - ThemeCraft",
    description:
      "Frequently asked questions about ThemeCraft's theme designer and features.",
  },
};

export default function FAQPage() {
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
                <p className="text-sm text-muted-foreground font-medium">FAQ</p>
              </div>
            </Link>
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
              <Link href="/faq" className="text-foreground font-medium">
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find quick answers to common questions about ThemeCraft, our theme
            designer, and how to create beautiful code editor themes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-muted/30 to-muted/10 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-primary" />
                Common Questions
              </CardTitle>
              <CardDescription>
                Browse through our most frequently asked questions to find the
                information you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {/* Getting Started */}
                <AccordionItem
                  value="getting-started"
                  className="border border-border/50 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="font-semibold">
                        Getting Started with ThemeCraft
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>How do I start creating a theme?</strong>
                      </p>
                      <p>
                        Simply click "Start Designing" and you'll be taken to
                        our visual theme editor. You can customize colors for
                        different parts of your code editor, and see changes in
                        real-time with our live preview.
                      </p>

                      <p>
                        <strong>Do I need any design experience?</strong>
                      </p>
                      <p>
                        Not at all! ThemeCraft is designed to be user-friendly
                        for everyone, from beginners to experienced designers.
                        Our visual editor makes it easy to create beautiful
                        themes without any coding knowledge.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Features & Tools */}
                <AccordionItem
                  value="features"
                  className="border border-border/50 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="font-semibold">Features & Tools</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>
                          What code editors does ThemeCraft support?
                        </strong>
                      </p>
                      <p>
                        We support major code editors including VSCode, Cursor,
                        Zed, Neovim, Helix, and more. You can export your theme
                        in multiple formats to fit your preferred editor.
                      </p>

                      <p>
                        <strong>
                          Can I see my theme changes in real-time?
                        </strong>
                      </p>
                      <p>
                        Yes! Our live preview system shows you exactly how your
                        theme will look with real code syntax highlighting.
                        Changes are applied instantly as you make adjustments.
                      </p>

                      <p>
                        <strong>
                          Are there pre-made themes I can start with?
                        </strong>
                      </p>
                      <p>
                        Yes, we offer several beautiful starting themes that you
                        can customize to your liking. You can modify any aspect
                        of these themes or start completely from scratch.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Export & Sharing */}
                <AccordionItem
                  value="export"
                  className="border border-border/50 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="font-semibold">Export & Sharing</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>How do I export my theme?</strong>
                      </p>
                      <p>
                        Click the "Export Theme" button and select your target
                        code editor. We'll generate the appropriate theme files
                        that you can install directly in your editor.
                      </p>

                      <p>
                        <strong>Can I share my themes with others?</strong>
                      </p>
                      <p>
                        Absolutely! You can share your created themes by copying
                        the export files or sharing the theme configuration.
                        Perfect for team collaboration or sharing with the
                        community.
                      </p>

                      <p>
                        <strong>Where are my themes saved?</strong>
                      </p>
                      <p>
                        Themes are created in your browser and aren't
                        automatically saved. Make sure to export your work
                        regularly to keep your creations safe.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Technical Questions */}
                <AccordionItem
                  value="technical"
                  className="border border-border/50 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <span className="font-semibold">Technical Questions</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>What browsers does ThemeCraft support?</strong>
                      </p>
                      <p>
                        ThemeCraft works best on modern browsers including
                        Chrome, Firefox, Safari, and Edge. We recommend using
                        the latest version for the best experience.
                      </p>

                      <p>
                        <strong>Is ThemeCraft free to use?</strong>
                      </p>
                      <p>
                        Yes! ThemeCraft is completely free to use. We believe
                        theme creation should be accessible to everyone.
                      </p>

                      <p>
                        <strong>Do you collect my personal data?</strong>
                      </p>
                      <p>
                        We respect your privacy. ThemeCraft doesn't collect
                        personal information or store your themes on our
                        servers. Everything happens locally in your browser.
                      </p>

                      <p>
                        <strong>What if I encounter a bug or issue?</strong>
                      </p>
                      <p>
                        If you experience any problems, please contact us
                        through our contact page. We actively monitor for issues
                        and work to resolve them quickly.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Color Theory & Design */}
                <AccordionItem
                  value="design"
                  className="border border-border/50 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">5</span>
                      </div>
                      <span className="font-semibold">
                        Color Theory & Design
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>What color formats are supported?</strong>
                      </p>
                      <p>
                        We support hex colors, RGB, HSL, and OKLCH color
                        formats. Our color picker validates and normalizes
                        colors to ensure consistent results across all code
                        editors.
                      </p>

                      <p>
                        <strong>
                          How do I choose good color combinations?
                        </strong>
                      </p>
                      <p>
                        Consider contrast ratios for readability, use
                        complementary colors for accents, and ensure enough
                        contrast between background and text colors. Our color
                        validation helps guide you toward accessible choices.
                      </p>

                      <p>
                        <strong>Can I import existing themes?</strong>
                      </p>
                      <p>
                        Currently, ThemeCraft focuses on theme creation rather
                        than importing existing themes. However, you can use any
                        color from existing themes as inspiration for your
                        custom creations.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Still have questions */}
          <section className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20">
              <CardContent className="py-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Can't find what you're looking for? Our friendly support team
                  is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Contact Support
                    </Button>
                  </Link>
                  <Button variant="outline" asChild>
                    <Link href="/">Try ThemeCraft</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
