"use client";

import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function EditorPage() {
  const [theme, setTheme] = useState<VSCodeTheme>({
    name: "My Custom Theme",
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
      {/* Simplified header for editor page */}
      <header className="sticky top-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and back button */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Theme Designer
              </h1>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <ThemeModeToggle />
              <Button
                onClick={() => setShowExport(true)}
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-primary/30 relative overflow-hidden group border-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Export Theme</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main editor content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 min-h-[calc(100vh-12rem)]">
            {/* Theme Editor */}
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto">
                    <h2 className="text-lg font-semibold text-foreground">
                      Theme Designer
                    </h2>
                  </div>
                </div>
                <ThemeEditor
                  theme={theme}
                  onThemeChange={(theme) => {
                    setTheme(theme);
                  }}
                />
              </div>
            </div>

            {/* Code Preview */}
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-6 border border-border/30 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto">
                    <h2 className="text-lg font-semibold text-foreground">
                      Live Preview
                    </h2>
                  </div>
                </div>
                <CodePreview theme={theme} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Export Dialog */}
      <ExportDialog
        open={showExport}
        onOpenChange={setShowExport}
        theme={theme}
      />
    </div>
  );
}
