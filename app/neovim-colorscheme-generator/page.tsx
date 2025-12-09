"use client";

import { Code2, Download, Palette, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function NeovimColorschemeGeneratorPage() {
  const [theme, setTheme] = useState<VSCodeTheme>({
    name: "My Neovim Colorscheme",
    type: "dark",
    colors: {
      "editor.background": "#1a1b26",
      "editor.foreground": "#c0caf5",
      "activityBar.background": "#16161e",
      "activityBar.foreground": "#c0caf5",
      "sideBar.background": "#1a1b26",
      "sideBar.foreground": "#c0caf5",
      "statusBar.background": "#16161e",
      "statusBar.foreground": "#c0caf5",
      "titleBar.activeBackground": "#16161e",
      "panel.background": "#1a1b26",
    },
    tokenColors: [
      {
        scope: ["comment"],
        settings: {
          foreground: "#565f89",
          fontStyle: "italic",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#bb9af7",
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: "#9ece6a",
        },
      },
      {
        scope: ["variable", "entity.name.variable"],
        settings: {
          foreground: "#c0caf5",
        },
      },
      {
        scope: ["entity.name.function"],
        settings: {
          foreground: "#7aa2f7",
        },
      },
      {
        scope: ["constant.numeric"],
        settings: {
          foreground: "#ff9e64",
        },
      },
    ],
  });

  const [showExport, setShowExport] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500/5 via-teal-500/5 to-green-500/10">
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
              <span className="text-foreground">
                Neovim Colorscheme Generator
              </span>
            </nav>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-3 border border-border/50">
                  <Code2 className="w-8 h-8 text-green-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Neovim Colorscheme Generator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Generate beautiful neovim colorschemes with Lua integration.
                Built for terminal-based coding with advanced plugin support.
              </p>
            </div>

            {/* Neovim specific features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Lua Integration</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Terminal Colors</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Plugin Support</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
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
                        Neovim Colorscheme Designer
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
                      className="w-full gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-sm lg:text-base"
                    >
                      <Download className="w-4 h-4" />
                      Export Neovim Colorscheme
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
                        Neovim Preview
                      </h2>
                    </div>
                  </div>
                  <CodePreview theme={theme} />

                  {/* Neovim specific info */}
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-start gap-2 lg:gap-3">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-sm lg:text-base">
                          Lua-Optimized
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          This colorscheme is designed for Neovim's Lua
                          integration with terminal colors and plugin support.
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

      {/* Neovim Specific Advantages */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Neovim Colorschemes Are Powerful
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Neovim offers unprecedented customization with Lua scripting,
                comprehensive terminal integration, and rich plugin ecosystems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Lua Scripting</h3>
                    <p className="text-sm text-muted-foreground">
                      Neovim's Lua integration allows for dynamic colorscheme
                      switching, conditional highlighting, and advanced theme
                      customization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Terminal Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Colorschemes automatically sync with terminal colors,
                      creating a unified color experience across the entire
                      development environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Plugin Ecosystem</h3>
                    <p className="text-sm text-muted-foreground">
                      Support for popular plugins like Telescope, LSP, and
                      treesitter ensures consistent highlighting across all
                      features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl p-6 border border-border/30">
                <h3 className="font-semibold mb-4 text-center">
                  Neovim Features
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-green-500 font-semibold mb-2">
                      Built-in Features
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Native LSP client</li>
                      <li>• Treesitter integration</li>
                      <li>• Telescope fuzzy finder</li>
                      <li>• Native terminal</li>
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-teal-500 font-semibold mb-2">
                      Colorscheme Support
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 256-color terminals</li>
                      <li>• Truecolor (24-bit) support</li>
                      <li>• GUI versions (GVim, Neovide)</li>
                      <li>• Theme switching automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-500/5 via-teal-500/5 to-green-500/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Creating Advanced Neovim Colorschemes
              </h2>
              <p className="text-muted-foreground">
                Learn to leverage Neovim's Lua capabilities for sophisticated
                theme creation
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Setup Lua Colorscheme Structure
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Create a proper Lua module structure with highlight
                      groups, terminal colors, and plugin-specific
                      configurations.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-500">
                        -- colors.lua structure
                      </div>
                      <div>local colors = {"{"}</div>
                      <div> bg = "#1a1b26",</div>
                      <div> fg = "#c0caf5",</div>
                      <div> comment = "#565f89",</div>
                      <div>{"}"}</div>
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
                      Configure Terminal Colors
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Set up terminal color synchronization for consistent
                      colors between Neovim and your terminal emulator.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-emerald-500">
                        -- Terminal color setup
                      </div>
                      <div>vim.g.terminal_color_0 = "#1a1b26"</div>
                      <div>vim.g.terminal_color_1 = "#f7768e"</div>
                      <div>vim.g.terminal_color_2 = "#9ece6a"</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">
                      Support Popular Plugins
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Configure colors for essential plugins like Telescope, LSP
                      diagnostics, and treesitter to ensure cohesive theming.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-orange-500">-- Plugin support</div>
                      <div>-- Telescope integration</div>
                      <div>-- LSP diagnostics</div>
                      <div>-- Treesitter highlighting</div>
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
                    <h3 className="font-semibold mb-2">Add Dynamic Features</h3>
                    <p className="text-muted-foreground mb-4">
                      Implement theme switching, conditional highlighting, and
                      automatic light/dark mode detection using Lua.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-red-500">-- Dynamic theming</div>
                      <div>local function set_colorscheme()</div>
                      <div> -- Load your colorscheme</div>
                      <div> require("colors").load()</div>
                      <div>end</div>
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
        defaultEditor="neovim"
      />
    </div>
  );
}
