import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zed Theme Maker - Visual Theme Creator for Zed Code Editor",
  description:
    "Create stunning themes for Zed editor with our visual theme maker. Design custom color schemes, syntax highlighting, and export themes. Free online theme creator.",
  keywords: [
    "zed theme maker",
    "zed editor theme creator",
    "zed color scheme generator",
    "custom zed themes",
    "zed editor styling",
    "zed theme editor",
    "zed customization",
    "theme maker",
    "color scheme generator",
    "syntax highlighting themes",
  ],
  alternates: {
    canonical: "https://themecraft.top/zed-theme-maker",
  },
  openGraph: {
    title: "Zed Theme Maker - Visual Theme Creator for Zed Code Editor",
    description:
      "Create stunning themes for Zed editor with our visual theme maker. Design custom color schemes, syntax highlighting, and export themes. Free online theme creator.",
    url: "https://themecraft.top/zed-theme-maker",
  },
  twitter: {
    title: "Zed Theme Maker - Visual Theme Creator for Zed Code Editor",
    description:
      "Create stunning themes for Zed editor with our visual theme maker. Design custom color schemes, syntax highlighting, and export themes. Free online theme creator.",
  },
};

export default function ZedThemeMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
