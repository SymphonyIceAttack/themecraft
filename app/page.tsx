"use client";

import {
  BookOpen,
  Code2,
  Layers,
  Menu,
  Palette,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Modern glass header */}
      <header className="sticky top-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced logo section */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-xl p-2 border border-border/50 group-hover:border-primary/20 transition-all duration-300">
                  <Code2 className="w-7 h-7 text-primary relative z-10" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent flex items-center gap-2">
                  ThemeCraft
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </h1>
                <p className="text-sm text-muted-foreground font-medium">
                  Professional Theme Designer
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/posts"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
              >
                <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Blog
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
              >
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                About
              </Link>
              <Link
                href="/faq"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
              >
                <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                FAQ
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
              >
                <Layers className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Contact
              </Link>
              <Link
                href="/editor"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
              >
                <Palette className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Start Designing
              </Link>
              <ThemeModeToggle />
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeModeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pt-6 border-t border-border/30 glass-dark rounded-xl mt-4 animate-in slide-in-from-top-4 duration-300">
              <nav className="flex flex-col gap-3">
                <Link
                  href="/posts"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="w-4 h-4" />
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  About
                </Link>
                <Link
                  href="/faq"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Zap className="w-4 h-4" />
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Layers className="w-4 h-4" />
                  Contact
                </Link>
                <Link
                  href="/editor"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Palette className="w-4 h-4" />
                  Start Designing
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent mb-6 leading-tight">
              Design Beautiful
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Code Themes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
              Create stunning themes for VSCode, Cursor, Zed, Neovim, and Helix
              with our professional visual editor and live preview system.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/editor">
                <Button
                  size="lg"
                  className="gap-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-primary/30 relative overflow-hidden group border-0 px-8 py-4 text-lg font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Palette className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Start Designing</span>
                </Button>
              </Link>
              <Link href="/posts">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-3 px-8 py-4 text-lg font-semibold border-2 hover:bg-accent/20 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5" />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visual Editor</h3>
                <p className="text-muted-foreground text-sm">
                  Intuitive color picker and controls
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Live Preview</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time code syntax preview
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Multi Export</h3>
                <p className="text-muted-foreground text-sm">
                  Support for 5+ code editors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Why Choose ThemeCraft?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Professional-grade theme design tools that make creating beautiful
              code editor themes effortless and intuitive.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <h3 className="font-semibold text-foreground">
                    Professional Tools
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm pl-5">
                  Advanced color controls and preview system for precise theme
                  design
                </p>
              </div>

              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <h3 className="font-semibold text-foreground">
                    Multi-Platform
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm pl-5">
                  Export themes for all major code editors with one click
                </p>
              </div>

              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <h3 className="font-semibold text-foreground">
                    Real-time Preview
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm pl-5">
                  See your changes instantly with our live code preview system
                </p>
              </div>

              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <h3 className="font-semibold text-foreground">Easy to Use</h3>
                </div>
                <p className="text-muted-foreground text-sm pl-5">
                  No coding required - design beautiful themes with our visual
                  editor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Ready to Design Your Perfect Theme?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of developers who use ThemeCraft to create
              stunning, professional code editor themes.
            </p>
            <Link href="/editor">
              <Button
                size="lg"
                className="gap-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-primary/30 relative overflow-hidden group border-0 px-8 py-4 text-lg font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Code2 className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Start Creating Now</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
