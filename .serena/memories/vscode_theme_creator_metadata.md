import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VS Code Theme Creator - Visual Theme Editor for Visual Studio Code",
  description: "Create stunning VS Code themes with our visual editor. Generate custom color schemes, syntax highlighting, and export directly to VS Code. Free online theme creator.",
  keywords: [
    "vs code theme creator",
    "vscode theme editor", 
    "visual studio code theme generator",
    "vs code color scheme maker",
    "custom vscode themes",
    "vs code styling",
    "vscode customization",
    "theme editor",
    "color scheme generator",
    "syntax highlighting themes"
  ],
  alternates: {
    canonical: "https://themecraft.top/vscode-theme-creator",
  },
  openGraph: {
    title: "VS Code Theme Creator - Visual Theme Editor for Visual Studio Code",
    description: "Create stunning VS Code themes with our visual editor. Generate custom color schemes, syntax highlighting, and export directly to VS Code. Free online theme creator.",
    url: "https://themecraft.top/vscode-theme-creator",
  },
  twitter: {
    title: "VS Code Theme Creator - Visual Theme Editor for Visual Studio Code", 
    description: "Create stunning VS Code themes with our visual editor. Generate custom color schemes, syntax highlighting, and export directly to VS Code. Free online theme creator.",
  },
};

export default function VSCodeThemeCreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}