import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helix Theme Editor - Create Custom Themes for Helix Editor",
  description:
    "Design custom themes for Helix editor with our visual theme editor. Create color schemes, syntax highlighting, and export themes. Free online theme creator.",
  keywords: [
    "helix theme editor",
    "helix editor theme creator",
    "helix color scheme maker",
    "custom helix themes",
    "helix editor styling",
    "helix theme editor",
    "helix customization",
    "theme editor",
    "color scheme generator",
    "syntax highlighting themes",
  ],
  alternates: {
    canonical: "https://themecraft.top/helix-theme-editor",
  },
  openGraph: {
    title: "Helix Theme Editor - Create Custom Themes for Helix Editor",
    description:
      "Design custom themes for Helix editor with our visual theme editor. Create color schemes, syntax highlighting, and export themes. Free online theme creator.",
    url: "https://themecraft.top/helix-theme-editor",
  },
  twitter: {
    title: "Helix Theme Editor - Create Custom Themes for Helix Editor",
    description:
      "Design custom themes for Helix editor with our visual theme editor. Create color schemes, syntax highlighting, and export themes. Free online theme creator.",
  },
};

export default function HelixThemeEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
