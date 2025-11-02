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
  title: "VSCode Theme Editor - Create & Export Custom Themes",
  description:
    "Online VSCode theme editor with live preview. Create, customize, and export beautiful Visual Studio Code color themes in JSON format. Support for multiple programming languages.",
  keywords: [
    "vscode",
    "theme",
    "editor",
    "color scheme",
    "syntax highlighting",
    "code editor",
    "visual studio code",
    "theme generator",
  ],
  authors: [{ name: "SymphoneIceAttack" }],
  creator: "SymphoneIceAttack",
  publisher: "SymphoneIceAttack",
  generator: "SymphoneIceAttack",
  applicationName: "VSCode Theme Editor",
  openGraph: {
    title: "VSCode Theme Editor - Create & Export Custom Themes",
    description:
      "Online VSCode theme editor with live preview. Create, customize, and export beautiful Visual Studio Code color themes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VSCode Theme Editor - Create & Export Custom Themes",
    description:
      "Online VSCode theme editor with live preview. Create, customize, and export beautiful Visual Studio Code color themes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
