"use client";

import {
  BookOpen,
  Code2,
  Github,
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
                <div className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent flex items-center gap-2">
                  ThemeCraft
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Code Editor Theme Creator
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
              <a
                href="https://github.com/SymphonyIceAttack/themecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
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
                <a
                  href="https://github.com/SymphonyIceAttack/themecraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
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

      {/* Editor-specific pages section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Specialized Theme Creators
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Choose your editor and get specialized tools optimized for your
              workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* VS Code */}
              <Link
                href="/vscode-theme-creator"
                className="group glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-border/30 hover:border-primary/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  VS Code Theme Creator
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Create stunning Visual Studio Code themes with specialized
                  controls and export options.
                </p>
                <div className="text-xs text-primary font-medium">
                  Create VS Code Themes →
                </div>
              </Link>

              {/* Cursor */}
              <Link
                href="/cursor-theme-generator"
                className="group glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-border/30 hover:border-blue-500/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-blue-500 transition-colors">
                  Cursor Theme Generator
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Design beautiful themes for Cursor editor with AI-powered
                  syntax highlighting support.
                </p>
                <div className="text-xs text-blue-500 font-medium">
                  Generate Cursor Themes →
                </div>
              </Link>

              {/* Zed */}
              <Link
                href="/zed-theme-maker"
                className="group glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-border/30 hover:border-emerald-500/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-emerald-500 transition-colors">
                  Zed Theme Maker
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Create lightning-fast themes for Zed editor with
                  high-performance rendering.
                </p>
                <div className="text-xs text-emerald-500 font-medium">
                  Make Zed Themes →
                </div>
              </Link>

              {/* Neovim */}
              <Link
                href="/neovim-colorscheme-generator"
                className="group glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-border/30 hover:border-green-500/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-green-500 transition-colors">
                  Neovim Colorscheme Generator
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate custom neovim colorschemes with Lua support and
                  terminal integration.
                </p>
                <div className="text-xs text-green-500 font-medium">
                  Generate Neovim Colorschemes →
                </div>
              </Link>

              {/* Helix */}
              <Link
                href="/helix-theme-editor"
                className="group glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-border/30 hover:border-amber-500/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-amber-500 transition-colors">
                  Helix Theme Editor
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Design themes for Helix editor with tree-sitter syntax
                  highlighting and modal editing.
                </p>
                <div className="text-xs text-amber-500 font-medium">
                  Edit Helix Themes →
                </div>
              </Link>

              {/* Universal Editor */}
              <Link
                href="/editor"
                className="group glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-border/30 hover:border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  Universal Theme Editor
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Create themes for all editors with our comprehensive visual
                  editor and multi-export system.
                </p>
                <div className="text-xs text-primary font-medium">
                  Universal Editor →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
              Powerful Features for Theme Design
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              ThemeCraft provides everything you need to create professional
              code editor themes with ease and precision.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-dark rounded-2xl p-6 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Visual Color Editor
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Intuitive color picker with advanced controls for precise
                  color selection and adjustment. Supports RGB, HSL, and OKLCH
                  color spaces.
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-6 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Live Code Preview
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  See your theme applied to real code examples in real-time.
                  Preview syntax highlighting for multiple programming
                  languages.
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-6 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Multi-Editor Export
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Export your themes for VSCode, Cursor, Zed, Neovim, and Helix
                  with a single click. Automatic format conversion included.
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-6 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Advanced Customization
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fine-tune every aspect of your theme including syntax colors,
                  UI elements, and editor styling options.
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-6 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Theme Library</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Browse and import themes from our growing community library.
                  Share your creations with other developers.
                </p>
              </div>

              <div className="glass-dark rounded-2xl p-6 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  Collaboration Tools
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Work together on themes with real-time collaboration features.
                  Version control and sharing capabilities included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-12">
              How ThemeCraft Works
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Choose Your Base Theme
                  </h3>
                  <p className="text-muted-foreground">
                    Start with one of our professionally designed base themes or
                    begin from scratch with a blank canvas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Customize with Visual Editor
                  </h3>
                  <p className="text-muted-foreground">
                    Use our intuitive visual editor to adjust colors, fonts, and
                    styling options. Make changes with real-time preview.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Preview on Real Code
                  </h3>
                  <p className="text-muted-foreground">
                    See how your theme looks with actual code samples in
                    multiple programming languages and frameworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Export & Install
                  </h3>
                  <p className="text-muted-foreground">
                    Export your theme in the correct format for your code editor
                    and install it instantly with one click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              <a
                href="https://github.com/SymphonyIceAttack/themecraft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-3 px-8 py-4 text-lg font-semibold border-2 hover:bg-accent/20 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="py-12 px-6 bg-background border-t border-border/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-2 border border-border/50">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      ThemeCraft
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Professional Theme Designer
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Create stunning code editor themes with our professional
                  visual editor and live preview system.
                </p>
              </div>

              {/* Quick links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    href="/editor"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Theme Editor
                  </Link>
                  <Link
                    href="/posts"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/about"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </div>
              </div>

              {/* Community & Support */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  Community & Support
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://github.com/SymphonyIceAttack/themecraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Users className="w-4 h-4" />
                    Contact Us
                  </Link>
                  <a
                    href="https://github.com/SymphonyIceAttack/themecraft/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Zap className="w-4 h-4" />
                    Report Issues
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 ThemeCraft. Made with ❤️ by{" "}
                <a
                  href="https://github.com/SymphonyIceAttack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  SymphonyIceAttack
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/SymphonyIceAttack/themecraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Star on GitHub
                </a>
                <span className="text-sm text-muted-foreground">
                  MIT License
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
