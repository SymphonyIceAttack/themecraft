"use client";

import { Code2, Download, Palette, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function CursorThemeGeneratorPage() {
  const [theme, setTheme] = useState<VSCodeTheme>({
    name: "My Cursor Theme",
    type: "dark",
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#e6edf3",
      "activityBar.background": "#161b22",
      "activityBar.foreground": "#e6edf3",
      "sideBar.background": "#0d1117",
      "sideBar.foreground": "#e6edf3",
      "statusBar.background": "#21262d",
      "statusBar.foreground": "#e6edf3",
      "titleBar.activeBackground": "#161b22",
      "panel.background": "#0d1117",
    },
    tokenColors: [
      {
        scope: ["comment"],
        settings: {
          foreground: "#7d8590",
          fontStyle: "italic",
        },
      },
      {
        scope: ["keyword"],
        settings: {
          foreground: "#ff7b72",
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: "#a5d6ff",
        },
      },
      {
        scope: ["variable"],
        settings: {
          foreground: "#ffa657",
        },
      },
      {
        scope: ["entity.name.function"],
        settings: {
          foreground: "#d2a8ff",
        },
      },
      {
        scope: ["constant.numeric"],
        settings: {
          foreground: "#79c0ff",
        },
      },
    ],
  });

  const [showExport, setShowExport] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Cursor Theme Generator</span>
            </nav>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-3 border border-border/50">
                  <Code2 className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Cursor Theme Generator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Design themes for Cursor's AI-powered editor. Built for modern
                development with enhanced syntax highlighting and intelligent
                code completion.
              </p>
            </div>

            {/* Cursor specific features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  AI Code Highlighting
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Git Integration</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Smart Suggestions</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Modern UI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor Section - Top Priority with Mobile Optimization */}
      <section className="py-8 lg:py-12 px-4 lg:px-6 bg-background/50">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Theme Editor - Mobile First */}
              <div className="order-2 lg:order-1 space-y-4 lg:space-y-6">
                <div className="glass-dark rounded-2xl p-4 lg:p-6 border border-border/30">
                  <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500" />
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500" />
                    <div className="ml-auto">
                      <h2 className="text-sm lg:text-lg font-semibold text-foreground">
                        Cursor Theme Designer
                      </h2>
                    </div>
                  </div>
                  <ThemeEditor
                    theme={theme}
                    onThemeChange={(theme) => {
                      setTheme(theme);
                    }}
                  />
                  <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-border/30">
                    <Button
                      onClick={() => setShowExport(true)}
                      className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm lg:text-base"
                    >
                      <Download className="w-4 h-4" />
                      Export Cursor Theme
                    </Button>
                  </div>
                </div>
              </div>

              {/* Code Preview - Mobile Second */}
              <div className="order-1 lg:order-2 space-y-4 lg:space-y-6">
                <div className="glass-dark rounded-2xl p-4 lg:p-6 border border-border/30 lg:sticky lg:top-24">
                  <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500" />
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500" />
                    <div className="ml-auto">
                      <h2 className="text-sm lg:text-lg font-semibold text-foreground">
                        Cursor Preview
                      </h2>
                    </div>
                  </div>
                  <CodePreview theme={theme} />

                  {/* Cursor specific info */}
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 rounded-xl bg-blue-600/5 border border-blue-600/20">
                    <div className="flex items-start gap-2 lg:gap-3">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-sm lg:text-base">
                          AI-Enhanced
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          Optimized for Cursor's AI features with enhanced
                          contrast and semantic highlighting for better code
                          understanding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursor Specific Advantages */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Cursor Themes Are Different
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cursor is not just another VS Code fork - it's a next-generation
                AI-powered code editor with enhanced features and modern design
                principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI-Enhanced Syntax</h3>
                    <p className="text-sm text-muted-foreground">
                      Cursor's AI understands context better, so themes need to
                      support intelligent code suggestions and enhanced semantic
                      highlighting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Modern Interface Design
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Cursor has a cleaner, more modern interface with subtle
                      shadows, improved contrast, and enhanced visual hierarchy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Integrated Terminal</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in terminal with better integration means themes
                      need to consider terminal colors alongside editor colors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl p-6 border border-border/30">
                <h3 className="font-semibold mb-4 text-center">
                  Cursor vs VS Code
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-blue-600 font-semibold mb-2">
                      Enhanced Features
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• AI-powered code completion</li>
                      <li>• Smart code generation</li>
                      <li>• Contextual suggestions</li>
                      <li>• Integrated AI chat</li>
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-purple-600 font-semibold mb-2">
                      UI Improvements
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Better contrast ratios</li>
                      <li>• Refined color palette</li>
                      <li>• Modern shadows & effects</li>
                      <li>• Enhanced readability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Creating Cursor Themes
              </h2>
              <p className="text-muted-foreground">
                Learn how to create themes that enhance Cursor's AI features and
                modern interface
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Optimize for AI Context
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Choose colors that work well with AI code suggestions.
                      High contrast and clear differentiation between code
                      elements are crucial.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-blue-600">
                        {"// AI-friendly contrast"}
                      </div>
                      <div>"editor.background": "#0d1117"</div>
                      <div>"editor.foreground": "#e6edf3"</div>
                      <div className="text-purple-600 mt-2">
                        {"// Clear token distinction"}
                      </div>
                      <div>"keyword": "#ff7b72"</div>
                      <div>"string": "#a5d6ff"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Modern UI Color Scheme
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Cursor uses a more refined UI palette. Focus on subtle
                      gradients, improved shadows, and better visual hierarchy.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-600">
                        {"// Modern UI colors"}
                      </div>
                      <div>"activityBar.background": "#161b22"</div>
                      <div>"sideBar.background": "#0d1117"</div>
                      <div>"statusBar.background": "#21262d"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Enhanced Git Integration
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Customize git diff colors and VCS indicators to work
                      seamlessly with Cursor's integrated version control
                      features.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-orange-600">
                        {"// Git integration"}
                      </div>
                      <div>
                        "gitDecoration.addedResourceForeground": "#3fb950"
                      </div>
                      <div>
                        "gitDecoration.modifiedResourceForeground": "#58a6ff"
                      </div>
                      <div>
                        "gitDecoration.deletedResourceForeground": "#f85149"
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Test AI Features</h3>
                    <p className="text-muted-foreground mb-4">
                      Test your theme with Cursor's AI features like chat, code
                      completion, and intelligent suggestions to ensure optimal
                      readability.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-red-600">
                        {"// Testing checklist"}
                      </div>
                      <div>{"✓ AI chat readability"}</div>
                      <div>{"✓ Code completion contrast"}</div>
                      <div>{"✓ Terminal integration"}</div>
                      <div>{"✓ Dark/light mode support"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Dialog */}
      <ExportDialog
        open={showExport}
        onOpenChange={setShowExport}
        theme={theme}
        defaultEditor="cursor"
      />
    </div>
  );
}
