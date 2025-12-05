import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#667eea" },
    { media: "(prefers-color-scheme: dark)", color: "#5a67d8" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://themecraft.top"),
  title: {
    default:
      "ThemeCraft - Professional Code Editor Theme Designer & Visual Editor",
    template: "%s | ThemeCraft - Code Theme Designer",
  },
  description:
    "Create stunning code editor themes for VSCode, Cursor, Zed, Neovim & Helix with our professional visual editor and live preview system.",
  keywords: [
    "code editor theme",
    "vscode theme",
    "cursor theme",
    "zed theme",
    "neovim colorscheme",
    "helix theme",
    "theme editor",
    "color scheme generator",
    "syntax highlighting themes",
    "theme creator",
    "code editor customization",
    "visual theme designer",
    "code syntax colors",
    "developer tools",
    "productivity tools",
    "code styling",
    "theme library",
    "color palette generator",
    "syntax highlighting editor",
    "code color schemes",
  ],
  authors: [
    {
      name: "SymphoneIceAttack",
      url: "https://github.com/symphoneiceattack",
    },
  ],
  creator: "SymphoneIceAttack",
  publisher: "ThemeCraft",
  generator: "ThemeCraft v2.0",
  applicationName: "ThemeCraft - Code Theme Editor",

  // SEO & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://themecraft.top",
    title: "ThemeCraft - Professional Code Theme Editor",
    description:
      "Universal code editor theme creator with live preview. Create, customize, and export beautiful color themes for VSCode, Cursor, Zed, Neovim, and Helix.",
    siteName: "ThemeCraft",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ThemeCraft - Code Theme Editor Interface",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ThemeCraft - Code Theme Editor",
    description:
      "Create stunning themes for VSCode, Cursor, Zed, Neovim & Helix with live preview and multi-export support.",
    creator: "@symphoneiceattack",
    images: ["/og-image.jpg"],
  },

  // PWA & App Links
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ThemeCraft",
  },

  // Canonical URL
  alternates: {
    canonical: "https://themecraft.top",
  },

  // Verification & Structured Data
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#667eea",
    "msapplication-config": "/browserconfig.xml",
  },

  // JSON-LD Schema
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
