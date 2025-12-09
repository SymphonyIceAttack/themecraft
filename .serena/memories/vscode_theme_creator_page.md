"use client";

import { ArrowLeft, Download, Palette, Code2, Zap, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function VSCodeThemeCreatorPage() {
  const [theme, setTheme] = useState<VSCodeTheme>({
    name: "My VS Code Theme",
    type: "dark",
    colors: {
      "editor.background": "#1e1e1e",
      "editor.foreground": "#d4d4d4",
      "activityBar.background": "#181818",
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
        scope: ["keyword", "storage.type", "storage.modifier"],
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
        scope: ["variable", "entity.name.variable"],
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">VS Code Theme Creator</span>
            </nav>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-xl p-3 border border-border/50">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  VS Code Theme Creator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Create stunning Visual Studio Code themes with our visual editor. 
                Design custom color schemes, syntax highlighting, and export directly to VS Code format.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <Palette className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Visual Color Editor</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Live Preview</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                <Download className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Direct VS Code Export</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">
              {/* Theme Editor */}
              <div className="space-y-6">
                <div className="glass-dark rounded-2xl p-6 border border-border/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-auto">
                      <h2 className="text-lg font-semibold text-foreground">
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
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <Button
                      onClick={() => setShowExport(true)}
                      className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    >
                      <Download className="w-4 h-4" />
                      Export VS Code Theme
                    </Button>
                  </div>
                </div>
              </div>

              {/* Code Preview */}
              <div className="space-y-6">
                <div className="glass-dark rounded-2xl p-6 border border-border/30 xl:sticky xl:top-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-auto">
                      <h2 className="text-lg font-semibold text-foreground">
                        VS Code Preview
                      </h2>
                    </div>
                  </div>
                  <CodePreview theme={theme} />
                  
                  {/* VS Code specific info */}
                  <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Ready for VS Code</h3>
                        <p className="text-sm text-muted-foreground">
                          This theme is optimized for Visual Studio Code with proper token colors, 
                          UI elements, and syntax highlighting support.
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

      {/* Export Dialog */}
      <ExportDialog
        open={showExport}
        onOpenChange={setShowExport}
        theme={theme}
      />
    </div>
  );
}