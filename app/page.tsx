"use client";

import { BookOpen, Code2, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { FaqSection } from "@/components/faq-section";
import { ThemeEditor } from "@/components/theme-editor";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import type { VSCodeTheme } from "@/types/theme";

export default function Home() {
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
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl animate-pulse" />
              <Code2 className="w-8 h-8 text-primary relative z-10" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                Code Theme Editor
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              </h1>
              <p className="text-sm text-muted-foreground">
                Create themes for VSCode, Cursor, Zed, Neovim & Helix
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeModeToggle />
            <Link
              href="/posts"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
            <Button
              onClick={() => setShowExport(true)}
              className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-primary/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Export Theme</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <ThemeEditor
            theme={theme}
            onThemeChange={(theme) => {
              setTheme(theme);
            }}
          />
          <CodePreview theme={theme} />
        </div>
      </main>

      <FaqSection />

      <ExportDialog
        open={showExport}
        onOpenChange={setShowExport}
        theme={theme}
      />
    </div>
  );
}
