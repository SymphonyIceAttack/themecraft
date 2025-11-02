"use client";

import { Code2, Download } from "lucide-react";
import { useState } from "react";
import { CodePreview } from "@/components/code-preview";
import { ExportDialog } from "@/components/export-dialog";
import { ThemeEditor } from "@/components/theme-editor";
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
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                VSCode Theme Editor
              </h1>
              <p className="text-sm text-muted-foreground">
                Create and export custom themes
              </p>
            </div>
          </div>
          <Button onClick={() => setShowExport(true)} className="gap-2">
            <Download className="w-4 h-4" />
            Export Theme
          </Button>
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

      <ExportDialog
        open={showExport}
        onOpenChange={setShowExport}
        theme={theme}
      />
    </div>
  );
}
