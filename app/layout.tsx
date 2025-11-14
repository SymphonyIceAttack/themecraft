import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://themecraft.top"),
  title:
    "Code Theme Editor - Create & Export Themes for VSCode, Cursor, Zed, Neovim & Helix",
  description:
    "Universal code editor theme creator with live preview. Create, customize, and export beautiful color themes for VSCode, Cursor, Zed, Neovim, and Helix. Support for multiple programming languages and formats (JSON, Lua, TOML).",
  keywords: [
    "code editor theme",
    "vscode theme",
    "cursor theme",
    "zed theme",
    "neovim colorscheme",
    "helix theme",
    "theme editor",
    "color scheme generator",
    "syntax highlighting",
    "theme creator",
    "code editor customization",
  ],
  authors: [{ name: "SymphoneIceAttack" }],
  creator: "SymphoneIceAttack",
  publisher: "SymphoneIceAttack",
  generator: "SymphoneIceAttack",
  applicationName: "Code Theme Editor",
  openGraph: {
    title: "Code Theme Editor - Create Themes for Multiple Editors",
    description:
      "Universal theme editor with live preview. Create and export themes for VSCode, Cursor, Zed, Neovim, and Helix.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Theme Editor - VSCode, Cursor, Zed, Neovim & Helix",
    description:
      "Universal theme editor with live preview. Create and export themes for multiple code editors.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Theme appearance="dark" accentColor="violet" radius="medium">
          {children}
          <Toaster />
          <Analytics />
        </Theme>
      </body>
    </html>
  );
}
