import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neovim Colorscheme Generator - Create Custom Neovim Color Schemes",
  description:
    "Generate beautiful neovim color schemes with our visual editor. Create custom colorschemes, syntax highlighting, and export to neovim format. Free online tool.",
  keywords: [
    "neovim colorscheme generator",
    "neovim color scheme creator",
    "neovim theme maker",
    "custom neovim colorschemes",
    "neovim styling",
    "neovim theme editor",
    "neovim customization",
    "colorscheme generator",
    "color scheme generator",
    "syntax highlighting themes",
  ],
  alternates: {
    canonical: "https://themecraft.top/neovim-colorscheme-generator",
  },
  openGraph: {
    title: "Neovim Colorscheme Generator - Create Custom Neovim Color Schemes",
    description:
      "Generate beautiful neovim color schemes with our visual editor. Create custom colorschemes, syntax highlighting, and export to neovim format. Free online tool.",
    url: "https://themecraft.top/neovim-colorscheme-generator",
  },
  twitter: {
    title: "Neovim Colorscheme Generator - Create Custom Neovim Color Schemes",
    description:
      "Generate beautiful neovim color schemes with our visual editor. Create custom colorschemes, syntax highlighting, and export to neovim format. Free online tool.",
  },
};

export default function NeovimColorschemeGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
