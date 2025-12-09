"use client";

import { Code2, Download, Palette, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function ZedThemeMakerPage() {
  const [theme, setTheme] = useState<VSCodeTheme>({
    name: "My Zed Theme",
    type: "dark",
    colors: {
      "editor.background": "#2d333b",
      "editor.foreground": "#adbac7",
      "activityBar.background": "#1f2428",
      "activityBar.foreground": "#adbac7",
      "sideBar.background": "#2d333b",
      "sideBar.foreground": "#adbac7",
      "statusBar.background": "#1f2428",
      "statusBar.foreground": "#adbac7",
      "titleBar.activeBackground": "#1f2428",
      "panel.background": "#2d333b",
    },
    tokenColors: [
      {
        scope: ["comment"],
        settings: {
          foreground: "#768390",
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
          foreground: "#9ece6a",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-emerald-500/10">
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
              <span className="text-foreground">Zed Theme Maker</span>
            </nav>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-3 border border-border/50">
                  <Code2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Zed Theme Maker
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Create lightning-fast themes for Zed editor. Built for maximum
                performance with Tree-sitter syntax highlighting and minimal
                resource usage.
              </p>
            </div>

            {/* Zed specific features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Tree-sitter Highlighting
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">GPU Acceleration</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Performance Metrics</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Memory Efficient</span>
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
                        Zed Theme Designer
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
                      className="w-full gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-sm lg:text-base"
                    >
                      <Download className="w-4 h-4" />
                      Export Zed Theme
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
                        Zed Preview
                      </h2>
                    </div>
                  </div>
                  <CodePreview theme={theme} />

                  {/* Zed specific info */}
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-start gap-2 lg:gap-3">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-sm lg:text-base">
                          Performance-Optimized
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          Designed for Zed's high-performance architecture with
                          GPU-accelerated rendering and Tree-sitter integration.
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

      {/* Zed Specific Advantages */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Zed Themes Are Lightning Fast
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zed is built for speed and efficiency. Its theming system
                reflects this philosophy with optimized color rendering and
                minimal overhead.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Tree-sitter Integration
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Zed uses Tree-sitter for syntax parsing, providing more
                      accurate and context-aware syntax highlighting than
                      traditional regex-based systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">GPU Rendering</h3>
                    <p className="text-sm text-muted-foreground">
                      Hardware-accelerated rendering means themes can use
                      complex gradients and effects without impacting
                      performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Memory Efficient</h3>
                    <p className="text-sm text-muted-foreground">
                      Zed's architecture minimizes memory usage, making it ideal
                      for working with large codebases and multiple files
                      simultaneously.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl p-6 border border-border/30">
                <h3 className="font-semibold mb-4 text-center">
                  Performance Metrics
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-emerald-500 font-semibold mb-2">
                      Startup Time
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Zed</span>
                      <span className="text-green-500 font-mono">
                        &lt; 200ms
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">VS Code</span>
                      <span className="text-orange-500 font-mono">~3-5s</span>
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-teal-500 font-semibold mb-2">
                      Memory Usage
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Zed (large project)
                      </span>
                      <span className="text-green-500 font-mono">~150MB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        VS Code (same project)
                      </span>
                      <span className="text-orange-500 font-mono">~800MB</span>
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-green-500 font-semibold mb-2">
                      CPU Usage
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Idle</span>
                      <span className="text-green-500 font-mono">~1-2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Active Editing
                      </span>
                      <span className="text-yellow-500 font-mono">~5-10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Creating High-Performance Zed Themes
              </h2>
              <p className="text-muted-foreground">
                Learn to create themes that leverage Zed's performance
                advantages and Tree-sitter capabilities
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Optimize for Tree-sitter
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Tree-sitter provides more granular syntax parsing. Use
                      specific scopes for better highlighting accuracy across
                      different programming languages.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-emerald-500">
                        -- Tree-sitter specific scopes
                      </div>
                      <div>"entity.name.function": "#d2a8ff"</div>
                      <div>"entity.name.type": "#ffa657"</div>
                      <div>"entity.name.class": "#79c0ff"</div>
                      <div className="text-teal-500 mt-2">
                        -- Language-specific tokens
                      </div>
                      <div>"rust.macro": "#a5d6ff"</div>
                      <div>"python.decorator": "#ffa657"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Use Efficient Color Palettes
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Choose colors that render efficiently on GPU. Avoid
                      complex calculations in color definitions and prefer
                      simple hex values when possible.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-500">
                        -- GPU-friendly colors
                      </div>
                      <div>"editor.background": "#2d333b"</div>
                      <div>"editor.foreground": "#adbac7"</div>
                      <div className="text-blue-500 mt-2">
                        -- Avoid complex gradients in JSON
                      </div>
                      <div>{"// Use solid colors for better performance"}</div>
                      <div>"keyword": "#ff7b72"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Test Across Languages
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Zed's Tree-sitter grammar support varies by language. Test
                      your theme with multiple languages to ensure consistent
                      highlighting quality.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-orange-500">
                        -- Test these languages
                      </div>
                      <div>Rust • Python • TypeScript • Go</div>
                      <div>Ruby • PHP • Java • C++</div>
                      <div className="text-purple-500 mt-2">
                        -- Verify highlighting quality
                      </div>
                      <div>• Functions and classes</div>
                      <div>• Comments and strings</div>
                      <div>• Keywords and operators</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Performance Testing</h3>
                    <p className="text-muted-foreground mb-4">
                      Test your theme with large files and complex projects to
                      ensure it doesn't impact Zed's performance
                      characteristics.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-red-500">
                        -- Performance checklist
                      </div>
                      <div>{"✓ Large file handling (>10MB)"}</div>
                      <div>{"✓ Multi-language projects"}</div>
                      <div>{"✓ Git diff highlighting"}</div>
                      <div>{"✓ Memory usage under load"}</div>
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
        defaultEditor="zed"
      />
    </div>
  );
}
