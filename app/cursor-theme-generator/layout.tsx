import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor Theme Generator - Create Custom Themes for Cursor Editor",
  description:
    "Design beautiful themes for Cursor editor with our visual theme generator. Create custom color schemes, syntax highlighting, and export themes. Free online tool.",
  keywords: [
    "cursor theme generator",
    "cursor editor theme creator",
    "cursor color scheme maker",
    "custom cursor themes",
    "cursor editor styling",
    "cursor theme editor",
    "cursor customization",
    "theme generator",
    "color scheme generator",
    "syntax highlighting themes",
  ],
  alternates: {
    canonical: "https://themecraft.top/cursor-theme-generator",
  },
  openGraph: {
    title: "Cursor Theme Generator - Create Custom Themes for Cursor Editor",
    description:
      "Design beautiful themes for Cursor editor with our visual theme generator. Create custom color schemes, syntax highlighting, and export themes. Free online tool.",
    url: "https://themecraft.top/cursor-theme-generator",
  },
  twitter: {
    title: "Cursor Theme Generator - Create Custom Themes for Cursor Editor",
    description:
      "Design beautiful themes for Cursor editor with our visual theme generator. Create custom color schemes, syntax highlighting, and export themes. Free online tool.",
  },
};

export default function CursorThemeGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
