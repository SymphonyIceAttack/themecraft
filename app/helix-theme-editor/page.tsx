"use client";

import { Code2, Download, Palette, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function HelixThemeEditorPage() {
  const [theme, setTheme] = useState<VSCodeTheme>({
    name: "My Helix Theme",
    type: "dark",
    colors: {
      "editor.background": "#282828",
      "editor.foreground": "#ebdbb2",
      "activityBar.background": "#3c3836",
      "activityBar.foreground": "#ebdbb2",
      "sideBar.background": "#282828",
      "sideBar.foreground": "#ebdbb2",
      "statusBar.background": "#504945",
      "statusBar.foreground": "#ebdbb2",
      "titleBar.activeBackground": "#3c3836",
      "panel.background": "#282828",
    },
    tokenColors: [
      {
        scope: ["comment"],
        settings: {
          foreground: "#928374",
          fontStyle: "italic",
        },
      },
      {
        scope: ["keyword"],
        settings: {
          foreground: "#fb4934",
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: "#b8bb26",
        },
      },
      {
        scope: ["variable"],
        settings: {
          foreground: "#ebdbb2",
        },
      },
      {
        scope: ["entity.name.function"],
        settings: {
          foreground: "#83a598",
        },
      },
      {
        scope: ["constant.numeric"],
        settings: {
          foreground: "#d3869b",
        },
      },
    ],
  });

  const [showExport, setShowExport] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-amber-500/10">
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
              <span className="text-foreground">Helix Theme Editor</span>
            </nav>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-3 border border-border/50">
                  <Code2 className="w-8 h-8 text-amber-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Helix Theme Editor
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Create minimalist themes for Helix editor. Built for
                keyboard-first editing with Tree-sitter syntax highlighting and
                modal interface.
              </p>
            </div>

            {/* Helix specific features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Modal Editing</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Keyboard-First</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Minimalist UI</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Tree-sitter</span>
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
                        Helix Theme Designer
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
                      className="w-full gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-sm lg:text-base"
                    >
                      <Download className="w-4 h-4" />
                      Export Helix Theme
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
                        Helix Preview
                      </h2>
                    </div>
                  </div>
                  <CodePreview theme={theme} />

                  {/* Helix specific info */}
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <div className="flex items-start gap-2 lg:gap-3">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-sm lg:text-base">
                          Modal-Optimized
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          Designed for Helix's modal editing system with clear
                          visual feedback for different editing modes.
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

      {/* Helix Specific Advantages */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Helix Themes Are Unique
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Helix brings modal editing to modern code editing with
                Tree-sitter integration, minimalist design, and keyboard-first
                philosophy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Modal Editing System</h3>
                    <p className="text-sm text-muted-foreground">
                      Helix uses modal editing similar to Vim. Themes need to
                      provide clear visual feedback for normal, insert, and
                      visual modes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Tree-sitter Integration
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced syntax parsing with semantic highlighting that
                      provides accurate code structure visualization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Minimalist Interface</h3>
                    <p className="text-sm text-muted-foreground">
                      Clean, distraction-free design that puts focus on the code
                      while providing subtle visual guidance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl p-6 border border-border/30">
                <h3 className="font-semibold mb-4 text-center">
                  Helix Philosophy
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-amber-500 font-semibold mb-2">
                      Modal Editing
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Normal mode for navigation</li>
                      <li>• Insert mode for editing</li>
                      <li>• Visual mode for selection</li>
                      <li>• Command mode for operations</li>
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-orange-500 font-semibold mb-2">
                      Performance Focus
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Memory efficient design</li>
                      <li>• Fast startup times</li>
                      <li>• Smooth large file handling</li>
                      <li>• GPU-accelerated rendering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Creating Helix Themes for Modal Editing
              </h2>
              <p className="text-muted-foreground">
                Learn to design themes that enhance Helix's unique modal editing
                experience
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Design for Modal States
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Helix has distinct visual states for normal mode, insert
                      mode, and visual mode. Design colors that provide clear
                      mode differentiation.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-amber-500">
                        -- Modal state colors
                      </div>
                      <div>"normal-mode": "#282828"</div>
                      <div>"insert-mode": "#3c3836"</div>
                      <div>"visual-mode": "#504945"</div>
                      <div>"command-mode": "#4c4945"</div>
                      <div className="text-orange-500 mt-2">
                        -- Selection highlighting
                      </div>
                      <div>"ui.selection": "#504945"</div>
                      <div>"ui.selection.match": "#665c54"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Tree-sitter Syntax Highlighting
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Leverage Tree-sitter's accurate parsing for precise syntax
                      highlighting. Use semantic tokens for better code
                      structure visualization.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-red-500">-- Tree-sitter tokens</div>
                      <div>"syntax.variable": "#ebdbb2"</div>
                      <div>"syntax.keyword": "#fb4934"</div>
                      <div>"syntax.string": "#b8bb26"</div>
                      <div>"syntax.function": "#83a598"</div>
                      <div className="text-pink-500 mt-2">
                        -- Semantic highlighting
                      </div>
                      <div>"entity.name.class": "#d3869b"</div>
                      <div>"entity.name.function": "#83a598"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">UI Element Theming</h3>
                    <p className="text-muted-foreground mb-4">
                      Helix has a minimalist UI with subtle hints. Design themes
                      that provide gentle visual guidance without overwhelming
                      the interface.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-purple-500">
                        -- Minimalist UI colors
                      </div>
                      <div>"ui.statusline": "#282828"</div>
                      <div>"ui.cursor": "#ebdbb2"</div>
                      <div>"ui.cursor.match": "#504945"</div>
                      <div>"ui.cursor.primary": "#fb4934"</div>
                      <div className="text-cyan-500 mt-2">
                        -- Prompt styling
                      </div>
                      <div>"ui.prompt": "#3c3836"</div>
                      <div>"ui.prompt.inactive": "#282828"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Performance Optimization
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Test your theme with large files and complex projects to
                      ensure it maintains Helix's excellent performance
                      characteristics.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-indigo-500">
                        -- Performance guidelines
                      </div>
                      <div>✓ Avoid complex gradient calculations</div>
                      <div>✓ Use efficient color representations</div>
                      <div>✓ Test with 100MB+ files</div>
                      <div>✓ Verify multi-language support</div>
                      <div className="text-green-500 mt-2">
                        -- Keyboard accessibility
                      </div>
                      <div>✓ High contrast mode support</div>
                      <div>✓ Color-blind friendly palette</div>
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
        defaultEditor="helix"
      />
    </div>
  );
}
