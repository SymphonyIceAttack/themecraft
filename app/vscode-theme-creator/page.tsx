"use client";

import { Code2, Download, Palette, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function VSCodeThemeCreatorPage() {
  const [theme, setTheme] = useState<VSCodeTheme>({
    name: "My VS Code Theme",
    type: "dark",
    colors: {
      "editor.background": "#1e1e1e",
      "editor.foreground": "#d4d4d4",
      "activityBar.background": "#2d2d30",
      "activityBar.foreground": "#ffffff",
      "sideBar.background": "#252526",
      "sideBar.foreground": "#cccccc",
      "statusBar.background": "#007acc",
      "statusBar.foreground": "#ffffff",
      "titleBar.activeBackground": "#2d2d30",
      "panel.background": "#1e1e1e",
    },
    tokenColors: [
      {
        scope: ["comment"],
        settings: {
          foreground: "#6A9955",
          fontStyle: "italic",
        },
      },
      {
        scope: ["keyword"],
        settings: {
          foreground: "#569CD6",
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: "#CE9178",
        },
      },
      {
        scope: ["variable"],
        settings: {
          foreground: "#9CDCFE",
        },
      },
      {
        scope: ["entity.name.function"],
        settings: {
          foreground: "#DCDCAA",
        },
      },
      {
        scope: ["constant.numeric"],
        settings: {
          foreground: "#B5CEA8",
        },
      },
    ],
  });

  const [showExport, setShowExport] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/10">
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
              <span className="text-foreground">VS Code Theme Creator</span>
            </nav>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-3 border border-border/50">
                  <Code2 className="w-8 h-8 text-blue-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  VS Code Theme Creator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Create stunning themes for Visual Studio Code. Customize syntax
                highlighting, UI colors, and export to the marketplace.
              </p>
            </div>

            {/* VSCode specific features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Token Colors</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Extension Integration
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Marketplace Ready</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Full UI Theming</span>
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
                        VS Code Theme Designer
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
                      className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-sm lg:text-base"
                    >
                      <Download className="w-4 h-4" />
                      Export VS Code Theme
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
                        VS Code Preview
                      </h2>
                    </div>
                  </div>
                  <CodePreview theme={theme} />

                  {/* VSCode specific info */}
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <div className="flex items-start gap-2 lg:gap-3">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-sm lg:text-base">
                          Marketplace Ready
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          This theme is ready for publication to the VS Code
                          Extension Marketplace with full token support.
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

      {/* VS Code Specific Advantages */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why VS Code Themes Are Powerful
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visual Studio Code offers the most comprehensive theming system
                with extensive token support, UI customization, and marketplace
                distribution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rich Token Support</h3>
                    <p className="text-sm text-muted-foreground">
                      VS Code provides extensive token scopes for precise syntax
                      highlighting across all programming languages and file
                      types.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Complete UI Theming</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize every aspect of the VS Code interface including
                      activity bar, sidebar, editor tabs, and status bar colors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Marketplace Distribution
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Easily publish themes to the VS Code Extension Marketplace
                      for global distribution and automatic updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl p-6 border border-border/30">
                <h3 className="font-semibold mb-4 text-center">
                  VS Code Features
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-blue-500 font-semibold mb-2">
                      Token System
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Semantic token support</li>
                      <li>• Language-specific scopes</li>
                      <li>• Conditional highlighting</li>
                      <li>• Extension compatibility</li>
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-purple-500 font-semibold mb-2">
                      UI Elements
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Activity bar & sidebar</li>
                      <li>• Editor tabs & title bar</li>
                      <li>• Status bar & panel</li>
                      <li>• Breadcrumbs & minimap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                How to Create VS Code Themes
              </h2>
              <p className="text-muted-foreground">
                Follow this step-by-step guide to create and publish your VS
                Code theme
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Choose Your Base Colors
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Start by setting your editor's main background and
                      foreground colors. These form the foundation of your
                      theme's look and feel.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-blue-500">
                        {"// Dark theme example"}
                      </div>
                      <div>"editor.background": "#1e1e1e"</div>
                      <div>"editor.foreground": "#d4d4d4"</div>
                      <div className="text-purple-500 mt-2">
                        {"// Light theme example"}
                      </div>
                      <div>"editor.background": "#ffffff"</div>
                      <div>"editor.foreground": "#1e1e1e"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Customize Syntax Colors
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Configure colors for different code elements like
                      keywords, strings, comments, and functions. VS Code's
                      token system provides granular control.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-500">
                        {"// Syntax highlighting"}
                      </div>
                      <div>"keyword": "#569CD6"</div>
                      <div>"string": "#CE9178"</div>
                      <div>"comment": "#6A9955"</div>
                      <div>"function": "#DCDCAA"</div>
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
                    <h3 className="font-semibold mb-2">Style the VS Code UI</h3>
                    <p className="text-muted-foreground mb-4">
                      Customize the VS Code interface elements including the
                      activity bar, sidebar, status bar, and tab colors to match
                      your theme.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-orange-500">
                        {"// UI customization"}
                      </div>
                      <div>"activityBar.background": "#181818"</div>
                      <div>"sideBar.background": "#252526"</div>
                      <div>"statusBar.background": "#007acc"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Export and Install</h3>
                    <p className="text-muted-foreground mb-4">
                      Export your theme as a .vsix file or JSON configuration,
                      then install it in VS Code. Test with popular extensions
                      to ensure compatibility.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-red-500">
                        {"// Installation methods"}
                      </div>
                      <div>
                        {
                          "1. VS Code: Ctrl+Shift+P → Extensions: Install from VSIX"
                        }
                      </div>
                      <div>
                        {
                          "2. Marketplace: Publish to VS Code Extension Marketplace"
                        }
                      </div>
                      <div>
                        {"3. Manual: Copy JSON to ~/.vscode/extensions/"}
                      </div>
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
        defaultEditor="vscode"
      />
    </div>
  );
}
